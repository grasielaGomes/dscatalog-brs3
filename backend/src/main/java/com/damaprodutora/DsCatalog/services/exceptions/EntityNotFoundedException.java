package com.damaprodutora.DsCatalog.services.exceptions;

public class EntityNotFoundedException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public EntityNotFoundedException(String msg) {
		super(msg);
	}

}
