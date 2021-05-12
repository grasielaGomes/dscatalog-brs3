package com.damaprodutora.DsCatalog.entities;

import java.io.Serializable;

public class Product implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String description;
	private Double price;
	private String imgUrl;
	
	private Category category;
	
	public Product(){}

	public Product(Long id, String name, String description, Double price, String imgUrl, Category category) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.imgUrl = imgUrl;
		this.category = category;
	}
	
	

}
