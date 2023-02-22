package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.repository.IdeasRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class IdeasController {
	
	@Autowired
	private IdeasRepository ideaRepository;
	
	@PostMapping("/cost")
    Ideas newIdea(@RequestBody Ideas newIdea) {
        return ideaRepository.save(newIdea);
    }
	

}
