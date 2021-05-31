package com.damaprodutora.DsCatalog.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;

import com.damaprodutora.DsCatalog.entities.Product;
import com.damaprodutora.DsCatalog.tests.Factory;

@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private ProductRepository repository;
	
	private long id;
	private long noId;
	private Integer countTotalProducts;
	private Product product;
	
	@BeforeEach
	void setUp() throws Exception {
		id = 1L;
		noId = 1000L;
		countTotalProducts = 25;
		product = Factory.createProduct();
	}
	
	@Test
	public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
		
		product.setId(null);
		
		repository.save(product);
		
		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(countTotalProducts + 1, product.getId());
		
	}
	
	@Test
	public void findByIdShouldNotReturnEmptyOptionalWhenIdExists() {
		
		Optional<Product> result = repository.findById(id);
		Assertions.assertTrue(result.isPresent());
		
	}
	
	@Test
	public void findByIdShoulReturnEmptyOptionalWhenIdDoesNotExist() {
		
		Optional<Product> result = repository.findById(noId);
		Assertions.assertFalse(result.isPresent());
		
	}
	
	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {
		
		repository.deleteById(id);
		
		Optional<Product> result = repository.findById(id);
		Assertions.assertFalse(result.isPresent());
		
	}
	
	@Test
	public void deleteShouldThrowsEmptyResultDataAccessExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(noId);
		});
		
	}

}
