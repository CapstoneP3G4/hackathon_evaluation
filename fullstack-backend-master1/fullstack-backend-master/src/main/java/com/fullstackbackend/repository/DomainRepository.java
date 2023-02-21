package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Domain;


public interface DomainRepository extends JpaRepository<Domain,Integer> {

}
