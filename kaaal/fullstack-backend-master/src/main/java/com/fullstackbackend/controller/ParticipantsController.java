package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.exception.UserNotFoundException;
import com.fullstackbackend.model.*;
import com.fullstackbackend.repository.ParticipantsRepository;
import com.fullstackbackend.repository.TeamRepository;
import com.fullstackbackend.repository.UserRepository;
import com.fullstackbackend.service.IdeaUpdateService;
import com.fullstackbackend.service.TeamUpdateService;



@RestController
@CrossOrigin("*")
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
        return  "User with id "+id+" has been deleted success.";
    }
	
//    @DeleteMapping("/user/{id}")
//    String deleteUser(@PathVariable Long id){
//        if(!userRepository.existsById(id)){
//            throw new UserNotFoundException(id);
//        }
//        userRepository.deleteById(id);
//        return  "Participant with id "+id+" has been deleted success.";
//    }
	
	   @GetMapping("/particpantsDetails/{email}")
	   Participants getUserByEmail(@PathVariable String email) {
	        return participantRepository.findByEmail(email);
	    }
    
//    @PostMapping("/participantDetails")
//    public ResponseEntity<Participants> particpantDetails(@RequestBody String email)
//    {Participants participant1 = participantRepository.findByEmail(email);
//    return ResponseEntity.ok(participant1);}

//	   TeamUpdateService teamUpdateService = new TeamUpdateService();
	   
	   @PostMapping("/statusChange")
	   public Team changeTeamStatus(@RequestBody Team newTeam) {
		   Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
		   existingData.setStatus(newTeam.getStatus());
		   existingData.setNewComment(newTeam.getNewComment());
		   existingData.setPanelistId(newTeam.getPanelistId());
		   return teamRepository.save(existingData);
	   }
	   
	   @PostMapping("/marksChange")
	   public Team changeTeamMarks(@RequestBody Team newTeam) {
		   Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
		   int i = newTeam.getMarks();
		   existingData.setJudgeList(newTeam.getJudgeList());
		   
		   existingData.setMarks(i+existingData.getMarks());
		   return teamRepository.save(existingData);
	   }
	   
	   
	   @PostMapping("/changeGithub")
	   public Team changeTeamGithub(@RequestBody Team newTeam) {
		   Team existingData = teamRepository.findById(newTeam.getTeamId()).get();
		   existingData.setGitHubLink(newTeam.getGitHubLink());
		   return teamRepository.save(existingData);
	   }
	   
//	   @PutMapping("/statusChange/{teamId}")
//	   public Team changeTeamStatus(@RequestBody Team newTeam,@PathVariable int teamId) {
//		   Team newTeam1 = teamUpdateService.updateTeamDetails(newTeam);
//		   return newTeam1;
//	   }
//	   
//	   @PutMapping("/marksChange")
//	   public Team changeTeamMarks(@RequestBody Team newTeam) {
//		   Team newTeam1 = teamUpdateService.updateTeamDetails(newTeam);
//		   return newTeam1;
//	   }
//	   
//	   IdeaUpdateService ideaUpdateService =  new IdeaUpdateService();
//	   
//	   @PutMapping("/ideaChange")
//	   public Ideas changeIdeaStatus(@RequestBody Ideas newIdea) {
//		   Ideas newIdea1 = ideaUpdateService.updateTeamDetails(newIdea);
//		   return newIdea1;
//	   }
	

}
