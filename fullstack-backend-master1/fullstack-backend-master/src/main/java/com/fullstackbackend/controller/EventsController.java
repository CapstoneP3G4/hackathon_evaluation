package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Events;

import com.fullstackbackend.repository.EventsRepository;

@RestController
@CrossOrigin("http://localhost:3000/adminDashboard")
public class EventsController {

	@Autowired
	private EventsRepository eventRepository;
	
	@PostMapping("/event")
    Events newEvent(@RequestBody Events newEvent) {
        return eventRepository.save(newEvent);
    }
	
}
