package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Participants;

@Repository
public interface ParticipantsRepository extends JpaRepository<Participants,Long> {
	
	Participants findByEmail(String Email);

}
