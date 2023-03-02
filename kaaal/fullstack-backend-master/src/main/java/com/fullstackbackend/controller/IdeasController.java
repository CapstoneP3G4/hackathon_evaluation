package com.fullstackbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.model.Team;
import com.fullstackbackend.repository.IdeasRepository;
import com.fullstackbackend.repository.TeamRepository;

@RestController
@CrossOrigin("*")
public class IdeasController {
	
	@Autowired
	private IdeasRepository ideaRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
//	@PostMapping("/updatedIdea")
//    Ideas newIdea(@RequestBody Ideas newIdea) {
//		Ideas idea = findById(newIdea.getIdeaId()).get();
//		idea.setProblemStatement(newIdea.getProblemStatement());
//		idea.setDescription(newIdea.getDescription());
//		
//        return ideaRepository.save(idea);
//    }
	

	@GetMapping("/getIdea")
	List<Ideas> getAllIdeas(){
		return ideaRepository.findAll();
	}
	
//	   @PostMapping("/updatedIdea")
//	   public Ideas updatedIdea(@RequestBody Ideas newIdea) {
//		   Ideas existingData1 = ideaRepository.findById(newIdea.getIdeaId()).get();
//		   existingData1.setProblemStatement(newIdea.getProblemStatement());
//		   existingData1.setDescription(newIdea.getDescription());
//		   return ideaRepository.save(existingData1);
//	   }
	   
	   @PostMapping("/updatedIdea")
	   public Team changeTeamStatus(@RequestBody Team newTeam) {
		   Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
		  
		   
		   Ideas newIdea = newTeam.getIdea();
		   
		   Ideas existingData1 = existingData.getIdea();
		   existingData1.setProblemStatement(newIdea.getProblemStatement());	
		   existingData1.setDescription(newIdea.getDescription());
		   ideaRepository.save(existingData1);
		   
		   
		   existingData.setStatus(newTeam.getStatus());
		   return teamRepository.save(existingData);
	   }
	   
}
