package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Events;

@Repository
public interface EventsRepository extends JpaRepository<Events,Long>{

}
