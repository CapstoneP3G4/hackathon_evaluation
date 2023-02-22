package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Team;


public interface TeamRepository extends JpaRepository<Team,Integer>{

}
