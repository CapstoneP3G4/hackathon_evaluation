package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Ideas;

@Repository
public interface IdeasRepository extends JpaRepository<Ideas,Integer>{

}
