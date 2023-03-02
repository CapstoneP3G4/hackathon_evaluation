package com.fullstackbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstackbackend.model.Team;
import com.fullstackbackend.repository.TeamRepository;

@Service
public class TeamUpdateService {

	TeamRepository teamRepository;
	
	public Team updateTeamDetails(Team newTeam) {
		return teamRepository.save(newTeam);
	}
	
}
