package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Events;

public interface EventsRepository extends JpaRepository<Events,Long>{

}
