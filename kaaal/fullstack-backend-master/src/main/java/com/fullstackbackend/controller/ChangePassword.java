package com.fullstackbackend.controller;

import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.User;
import com.fullstackbackend.model.UserDto;
import com.fullstackbackend.repository.UserRepository;
import com.fullstackbackend.service.PasswordEncryption;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ChangePassword {

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/ChangePassword")
	public ResponseEntity<String> changePassword(@RequestBody UserDto user) throws NoSuchAlgorithmException 
	{
		
		String hashOldPassword = PasswordEncryption.toHexString(PasswordEncryption.getSHA(user.getOldPassword()));
		String hashNewPassword = PasswordEncryption.toHexString(PasswordEncryption.getSHA(user.getNewPassword()));
		
//		String hashOldPassword = user.getOldPassword();
//		String hashNewPassword = user.getNewPassword();
		
		Optional<User> userOptional = userRepository.findByEmailAndPassword(user.getEmail(), hashOldPassword);
		
		if (userOptional.isPresent())
		{
			User existingData = userRepository.findByEmail(user.getEmail()).get();
			existingData.setPassword(hashNewPassword);
			userRepository.save(existingData);
			
			return ResponseEntity.ok("Password updated successfully");
		} 
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		}


	}

	
}
