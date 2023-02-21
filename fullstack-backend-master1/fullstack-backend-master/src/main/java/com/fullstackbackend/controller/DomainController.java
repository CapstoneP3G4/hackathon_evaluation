package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Domain;

import com.fullstackbackend.repository.DomainRepository;


@RestController
@CrossOrigin("http://localhost:3000")
public class DomainController {

	@Autowired
	private DomainRepository domainRepository;
	
	@PostMapping("/domain")
    Domain newDomain(@RequestBody Domain newDomain) {
        return domainRepository.save(newDomain);
    }
	
}
