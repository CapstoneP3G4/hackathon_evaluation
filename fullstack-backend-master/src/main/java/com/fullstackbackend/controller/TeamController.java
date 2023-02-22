package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Team;

import com.fullstackbackend.repository.TeamRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class TeamController {

	@Autowired
	TeamRepository teamRepository;
	
	@PostMapping("/team")
    Team newTeam(@RequestBody Team newTeam) {
        return teamRepository.save(newTeam);
    }
	
	
}
