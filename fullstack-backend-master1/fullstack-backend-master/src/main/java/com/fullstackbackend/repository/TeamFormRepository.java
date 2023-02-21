package com.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackbackend.model.TeamForm;

public interface TeamFormRepository extends JpaRepository<TeamForm, Integer> {

}
