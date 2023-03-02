package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.model.*;
import com.fullstackbackend.repository.UserRepository;
import com.fullstackbackend.service.PasswordEncryption;

import java.security.NoSuchAlgorithmException;
//import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
public class LoginController {


	@Autowired
	private UserRepository userRepository;

	@PostMapping("/login")
	public ResponseEntity<Optional<User>> login(@RequestBody User user) throws NoSuchAlgorithmException 
	{
		String hashPassword=PasswordEncryption.toHexString(PasswordEncryption.getSHA(user.getPassword()));

		Optional<User> userOptional = userRepository.findByEmailAndPassword(user.getEmail(), hashPassword);
		//	System.out.println(user);
		if (userOptional.isPresent())
		{
			return ResponseEntity.ok(userOptional);
		} 
		else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}
	//    @Autowired
	//    private UserRepository userRepository;
	//
	//    @PostMapping("/")
	//    User newUser(@RequestBody User newUser) {
	//        return userRepository.save(newUser);
	//    }
	//
	//    
	//    @GetMapping("/adminDashboard")
	//    List<User> getAllUsers() {
	//        return userRepository.findAll();
	//    }
	//
	//    @GetMapping("/user/{id}")
	//    User getUserById(@PathVariable Long id) {
	//        return userRepository.findById(id)
	//                .orElseThrow(() -> new UserNotFoundException(id));
	//    }
	//
	//    @PutMapping("/user/{id}")
	//    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
	//        return userRepository.findById(id)
	//                .map(user -> {
	//                 
	//                    user.setName(newUser.getName());
	//                    user.setEmail(newUser.getEmail());
	//                    user.setMobile(newUser.getMobile());
	//                    
	//                    return userRepository.save(user);
	//                }).orElseThrow(() -> new UserNotFoundException(id));
	//    }
	//

	//


}
