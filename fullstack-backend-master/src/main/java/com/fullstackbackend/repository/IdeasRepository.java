package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Ideas;


public interface IdeasRepository extends JpaRepository<Ideas,Integer>{

}
