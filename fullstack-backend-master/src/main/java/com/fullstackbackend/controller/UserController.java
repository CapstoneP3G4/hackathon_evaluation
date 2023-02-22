package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.model.*;
import com.fullstackbackend.repository.UserRepository;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/adminDashboard")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/admin")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    
    @GetMapping("/adminDashboard")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                 
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    user.setMobile(newUser.getMobile());
                    
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }



}
