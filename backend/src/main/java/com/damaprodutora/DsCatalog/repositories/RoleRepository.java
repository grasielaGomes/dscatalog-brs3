package com.damaprodutora.DsCatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.damaprodutora.DsCatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
