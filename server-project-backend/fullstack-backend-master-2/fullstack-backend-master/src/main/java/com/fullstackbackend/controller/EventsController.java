package com.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Events;
import com.fullstackbackend.model.User;
import com.fullstackbackend.repository.EventsRepository;
import com.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:8080")
public class EventsController {

	@Autowired
	private EventsRepository eventRepository;
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/event")
    Events newEvent(@RequestBody Events newEvent) {
        return eventRepository.save(newEvent);
    }
	
	 @GetMapping("/getUsers")
	 List<User> getAllUsers() {
	       return userRepository.findAll();
	 }
	
}
