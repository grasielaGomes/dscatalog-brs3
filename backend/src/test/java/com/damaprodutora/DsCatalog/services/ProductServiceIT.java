package com.damaprodutora.DsCatalog.services;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;

import com.damaprodutora.DsCatalog.dto.ProductDTO;
import com.damaprodutora.DsCatalog.repositories.ProductRepository;
import com.damaprodutora.DsCatalog.services.exceptions.ResourceNotFoundedException;
import com.damaprodutora.DsCatalog.tests.Factory;

@SpringBootTest
@Transactional
public class ProductServiceIT {
	
	@Autowired
	private ProductService service;
	
	@Autowired
	private ProductRepository repository;
	
	private Long id;
	private Long noId;
	private Long countTotalProducts;
	private ProductDTO dto;
	
	@BeforeEach
	void setUp() throws Exception {
		id = 1L;
		noId = 1000L;
		countTotalProducts = 25L;
		dto = Factory.createProductDTO();
	
	}
	
	@Test
	public void findAllPagedShouldReturnAPage() {
		
		PageRequest pageRequest = PageRequest.of(0, 10);
		
		Page<ProductDTO> result = service.findAllPaged(0L, "", pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(0, result.getNumber());
		Assertions.assertEquals(10, result.getSize());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
	}
	
	@Test
	public void findAllPagedShouldReturnEmptyPageWhenPageDoesNotExist() {
		
		PageRequest pageRequest = PageRequest.of(50, 10);
		
		Page<ProductDTO> result = service.findAllPaged(0L, "", pageRequest);
		
		Assertions.assertTrue(result.isEmpty());
	}
	
	@Test
	public void findAllPagedShouldReturnSortedPageWhenSortByName() {
		
		PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("name"));
		
		Page<ProductDTO> result = service.findAllPaged(0L, "", pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals("Macbook Pro", result.getContent().get(0).getName());
		Assertions.assertEquals("PC Gamer", result.getContent().get(1).getName());
		Assertions.assertEquals("PC Gamer Alfa", result.getContent().get(2).getName());
	}
	
	@Test
	public void findByIdShouldReturnAProduct() {
		
		ProductDTO result = service.findById(id);
		
		Assertions.assertNotNull(result);
		Assertions.assertEquals("The Lord of the Rings", result.getName());
		Assertions.assertEquals(90.5, result.getPrice());
	}
	
	@Test
	public void findByIdShouldThrowsResourceNotFoundedExceptionWhenIdDoesNotExist() {
	
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.findById(noId);
		});
	}
	
	@Test
	public void updateShouldReturnAProduct() {
		
		ProductDTO result = service.update(id, dto);
		
		Assertions.assertNotNull(result);
		Assertions.assertEquals("Phone", result.getName());
		Assertions.assertEquals(800.0, result.getPrice());
		
	}
	
	@Test
	public void updateShouldThrowsResourceNotFoundedExceptionWhenIdDoesNotExist() {
	
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.update(noId, dto);
		});
	}
	
	@Test
	public void deleteShouldDeleteResourceWhenIdExists() {
		
		service.delete(id);
		
		Assertions.assertEquals(countTotalProducts - 1, repository.count());
	}
	
	@Test
	public void deleteShouldThrowsResourceNotFoundExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.delete(noId);
		});
	}

}
