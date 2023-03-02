package com.fullstackbackend.controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.User;
import com.fullstackbackend.repository.UserRepository;
import com.fullstackbackend.service.PasswordEncryption;
import com.fullstackbackend.service.SendEmailService;

@RestController
@CrossOrigin("*")
public class RolesController {
	
	@Autowired
	private UserRepository userRepository;
	 
	@Autowired
	private SendEmailService sendEmailService;
	
	@PostMapping("/user")
	public User newUser(@RequestBody User newUser) throws NoSuchAlgorithmException {
		
		String oldPass = newUser.getPassword();
		String hashPassword=PasswordEncryption.toHexString(PasswordEncryption.getSHA(newUser.getPassword()));
		newUser.setPassword(hashPassword);
		User user = userRepository.save(newUser);
		
		if(newUser.getRole_id() == 3) {
			String subject = "Judge role assigned!!";
			String body = "You have been assigned the role of judge \n " + newUser.getName() + ", Password: " +oldPass;
			try {
				sendEmailService.sendEmail(newUser.getEmail(), subject, body);

			} catch (IOException ex) {
				// handle exception
			}
		} else if(newUser.getRole_id() == 2) {
			String subject = "Panelist role assigned!!";
			String body = "You have been assigned the role of panelist \n" + newUser.getName() + ", Password: " + oldPass;
			try {
				sendEmailService.sendEmail(newUser.getEmail(), subject, body);

			} catch (IOException ex) {
				// handle exception
			}
		}
		
		return user;
	}
}
