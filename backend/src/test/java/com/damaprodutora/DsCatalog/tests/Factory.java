package com.damaprodutora.DsCatalog.tests;

import java.time.Instant;

import com.damaprodutora.DsCatalog.dto.ProductDTO;
import com.damaprodutora.DsCatalog.entities.Category;
import com.damaprodutora.DsCatalog.entities.Product;

public class Factory {
	
	public static Product createProduct() {
		Product product = new Product(1L, "Phone", "Good Phone", 800.0, "https://img.com/img.png", Instant.parse("2020-07-14T10:00:00Z"));
		product.getCategories().add(createCategory());
		return product;
	}
	
	public static ProductDTO createProductDTO() {
		Product product = createProduct();
		return new ProductDTO(product, product.getCategories());
	}
	
	public static Category createCategory() {
		return new Category(2L, "Eletrônicos");
	}

}
