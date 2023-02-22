package com.fullstackbackend.controller;

import javax.mail.MessagingException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.fullstackbackend.model.User;
import com.fullstackbackend.service.MailService;

@RestController
@RequestMapping("/registration")

public class RegistrationController {
	
	
	 private final MailService mailService;

	    public RegistrationController(MailService mailService) {
	        this.mailService = mailService;
	    }

	    @PostMapping
	    public ResponseEntity<String> registerTeam(@RequestBody User user) throws MessagingException {
	        // TODO: Validate team data
	        String toAddress = user.getEmail();
	        String teamName = user.getName();

	        // TODO: Save team data to database
	        // ...

	        // Send registration confirmation email
	        mailService.sendRegistrationConfirmationEmail(toAddress, teamName);

	        return ResponseEntity.ok("Registration successful. Confirmation email sent.");
	    }

}
