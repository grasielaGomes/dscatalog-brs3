package com.damaprodutora.DsCatalog.services.exceptions;

public class ResourceNotFoundedException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundedException(String msg) {
		super(msg);
	}
}
