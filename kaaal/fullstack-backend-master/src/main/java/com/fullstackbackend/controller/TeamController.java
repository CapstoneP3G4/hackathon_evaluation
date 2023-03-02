package com.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.model.Team;

import com.fullstackbackend.repository.TeamRepository;

@RestController
@CrossOrigin("*")
public class TeamController {

	@Autowired
	TeamRepository teamRepository;
	
//	@PostMapping("/team")
//    Team newTeam(@RequestBody Team newTeam) {
//        return teamRepository.save(newTeam);
//    }
	@GetMapping("/winners")
	List<Team> getWinners(){
		return teamRepository.findTop3ByOrderByMarksDesc();
	}
	
	@GetMapping("/getTeam")
	List<Team> getAllTeam(){
		return teamRepository.findAll();
	}
	
}
