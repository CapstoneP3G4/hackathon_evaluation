package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Domain;

@Repository
public interface DomainRepository extends JpaRepository<Domain,Integer> {

}
