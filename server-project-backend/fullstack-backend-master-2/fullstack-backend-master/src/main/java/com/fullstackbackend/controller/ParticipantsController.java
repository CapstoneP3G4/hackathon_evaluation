package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

import com.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.model.*;

import com.fullstackbackend.repository.ParticipantsRepository;
import com.fullstackbackend.repository.TeamRepository;
import com.fullstackbackend.repository.UserRepository;




@RestController
@CrossOrigin("http://localhost:8080")
public class ParticipantsController {
	
	@Autowired
	private ParticipantsRepository participantRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@PostMapping("/participant")
    Participants newEvent(@RequestBody Participants newparticipant) {
        return participantRepository.save(newparticipant);
    }
	
    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "Participant with id "+id+" has been deleted success.";
    }
	
    @GetMapping("/particpantsDetails/{email}")
	Participants getUserByEmail(@PathVariable String email) {
        return participantRepository.findByEmail(email);
    }

//    TeamUpdateService teamUpdateService = new TeamUpdateService(); 
    
//    @PutMapping("/statusChange/{teamId}")
//    public Team changeTeamStatus(@RequestBody Team newTeam,@PathVariable int teamId) {
//    	
//    	return teamUpdateService.updateTeamDetails(newTeam);
//    }
    
    @PostMapping("/statusChange")
    public Team changeTeamStatus(@RequestBody Team newTeam) {
    	
    	Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
    	existingData.setStatus(newTeam.getStatus());
    	existingData.setNewComment(newTeam.getNewComment());
    	return teamRepository.save(existingData);
    }
    
    
    @PostMapping("/marksChange")
    public Team changeTeamMarks(@RequestBody Team newTeam) {
    	
    	Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
    	existingData.setMarks(newTeam.getMarks() + existingData.getMarks());
    	return teamRepository.save(existingData);
    }
    
//    @PutMapping("/marksChange/{teamId}")
//    public Team changeTeamMarks(@RequestBody Team newTeam) {
//    	return teamUpdateService.updateTeamDetails(newTeam);
//    }
//	
//    IdeaUpdateService ideaUpdateService = new IdeaUpdateService();
//    
//    @PutMapping("/ideaChange/{teamId}")
//    public Ideas changeIdeaStatus(@RequestBody Ideas newIdea) {
//    	
//    	 return(ideaUpdateService.updateTeamDetails(newIdea));
//    }

}
