package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.model.Participants;
import com.fullstackbackend.repository.ParticipantsRepository;



@RestController
@CrossOrigin("http://localhost:3000")
public class ParticipantsController {
	
	@Autowired
	private ParticipantsRepository participantRepository;
	
	@PostMapping("/participant")
    Participants newEvent(@RequestBody Participants newparticipant) {
        return participantRepository.save(newparticipant);
    }
	
//    @DeleteMapping("/user/{id}")
//    String deleteUser(@PathVariable Long id){
//        if(!participantRepository.existsById(id)){
//            throw new UserNotFoundException(id);
//        }
//        participantRepository.deleteById(id);
//        return  "Participant with id "+id+" has been deleted success.";
//    }

	

}
