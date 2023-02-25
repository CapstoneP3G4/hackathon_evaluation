package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.User;
import com.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:8080")
public class RolesController {
	
	 @Autowired
	 UserRepository userRepository;
	
	 @PostMapping("/user")
	 User newUser(@RequestBody User newUser) {
	//	 System.out.println(newUser);
		 return userRepository.save(newUser);
	 }

}
