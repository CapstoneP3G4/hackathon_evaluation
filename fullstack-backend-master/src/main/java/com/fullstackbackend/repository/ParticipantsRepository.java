package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.Participants;


public interface ParticipantsRepository extends JpaRepository<Participants,Long> {

}
