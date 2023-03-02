package com.fullstackbackend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Ideas;

@Repository
public interface IdeasRepository extends JpaRepository<Ideas,Integer>{

//	Optional<Ideas> findByIdeaId(int ideaId);

//	Ideas findById(int id);
}
