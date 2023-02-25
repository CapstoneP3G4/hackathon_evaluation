package com.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.repository.IdeasRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class IdeasController {
	
	@Autowired
	private IdeasRepository ideaRepository;
//	
//	@PostMapping("/cost")
//    Ideas newIdea(@RequestBody Ideas newIdea) {
//        return ideaRepository.save(newIdea);
//    }
	
	@GetMapping("/getIdea")
	List<Ideas> getAllIdeas(){
		return ideaRepository.findAll();
	}
	

}
