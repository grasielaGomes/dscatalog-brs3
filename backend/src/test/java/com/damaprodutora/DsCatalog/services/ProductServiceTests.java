package com.damaprodutora.DsCatalog.services;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.damaprodutora.DsCatalog.dto.ProductDTO;
import com.damaprodutora.DsCatalog.entities.Category;
import com.damaprodutora.DsCatalog.entities.Product;
import com.damaprodutora.DsCatalog.repositories.CategoryRepository;
import com.damaprodutora.DsCatalog.repositories.ProductRepository;
import com.damaprodutora.DsCatalog.services.exceptions.DatabaseException;
import com.damaprodutora.DsCatalog.services.exceptions.ResourceNotFoundedException;
import com.damaprodutora.DsCatalog.tests.Factory;


@ExtendWith(SpringExtension.class)
public class ProductServiceTests {
	
	private long id;
	private long noId;
	private long dependentId;
	private PageImpl<Product> page;
	private Product product;
	private ProductDTO dto;
	private Category category;
	
	@BeforeEach
	void setUp() throws Exception {
		id = 1L;
		noId = 1000L;
		dependentId = 4L;
		product = Factory.createProduct();
		dto = Factory.createProductDTO();
		page = new PageImpl<>(List.of(product));
		category = Factory.createCategory();
		
		//Void
		doNothing().when(repository).deleteById(id);
		doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(noId);
		doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
		
		//Return something
		when(repository.findAll((Pageable)ArgumentMatchers.any())).thenReturn(page);
		
		when(repository.findById(id)).thenReturn(Optional.of(product));
		when(repository.findById(noId)).thenReturn(Optional.empty());
		
		when(repository.save(ArgumentMatchers.any())).thenReturn(product);
		
		when(repository.getOne(id)).thenReturn(product);
		when(repository.getOne(noId)).thenThrow(EntityNotFoundException.class);
		
		when(cRepository.getOne(ArgumentMatchers.any())).thenReturn(category);
		when(cRepository.getOne(noId)).thenThrow(EntityNotFoundException.class);
	}
	
	@InjectMocks
	private ProductService service;
	
	@Mock
	private ProductRepository repository;
	
	@Mock
	private CategoryRepository cRepository;
	
	@Test
	public void findAllShouldReturnAPage() {
		Pageable pageable = PageRequest.of(0, 10);
		Page<ProductDTO> result = service.findAllPaged(pageable);
		
		Assertions.assertNotNull(result);
		verify(repository).findAll(pageable);
	}
	
	@Test
	public void findByIdShouldReturnAProduct() {
		
		ProductDTO result = service.findById(id);
		
		Assertions.assertNotNull(result);
		verify(repository).findById(id);
	}
	
	@Test
	public void findByIdShouldThrowsResourceNotFoundedExceptionWhenIdDoesNotExist() {
	
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.findById(noId);
		});
		
		verify(repository).findById(noId);
	}
	
	@Test
	public void updateShouldReturnAProduct() {
		
		ProductDTO result = service.update(id, dto);
		
		Assertions.assertNotNull(result);
		verify(repository, times(1)).save(product);
	}
	
	@Test
	public void updateShouldThrowsResourceNotFoundedExceptionWhenIdDoesNotExist() {
	
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.update(noId, dto);
		});
		
		verify(repository).getOne(noId);
	}
	
	@Test
	public void deleteShouldDoesNothingWhenIdExists() {
		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(id);
		});
		
		verify(repository, times(1)).deleteById(id);
	}
	
	@Test
	public void deleteShouldThrowsResourceNotFoundedExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(ResourceNotFoundedException.class, () -> {
			service.delete(noId);
		});
		
		verify(repository, times(1)).deleteById(noId);
	}
	
	@Test
	public void deleteShouldThrowsDataIntegrityViolationExceptionWhenIdIsDependent() {
		
		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});
		
		verify(repository, times(1)).deleteById(dependentId);
	}

}
