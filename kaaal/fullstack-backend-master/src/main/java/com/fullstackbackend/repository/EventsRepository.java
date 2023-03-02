package com.fullstackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Events;

public interface EventsRepository extends JpaRepository<Events,Long>{
	


}
