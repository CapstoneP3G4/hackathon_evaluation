package com.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.*;

import com.fullstackbackend.repository.TeamRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class TeamController {

	@Autowired
	TeamRepository teamRepository;
	
//	@PostMapping("/team")
//    Team newTeam(@RequestBody Team newTeam) {
//        return teamRepository.save(newTeam);
//    }
	
	@GetMapping("/getTeam")
	List<Team> getAllTeam(){
		return teamRepository.findAll();
	}
	
}
