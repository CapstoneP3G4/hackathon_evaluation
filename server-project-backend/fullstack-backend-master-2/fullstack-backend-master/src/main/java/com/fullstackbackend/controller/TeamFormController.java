package com.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.fullstackbackend.model.*;

import com.fullstackbackend.repository.*;


@RestController
@CrossOrigin("*")
public class TeamFormController {

	@Autowired
	private UserRepository userRepository;
	

	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private ParticipantsRepository participantsRepository;
	
	@Autowired
	private IdeasRepository ideaRepository;
	
	
	@PostMapping("/registrationForm")
    TeamForm newTeamForm(@RequestBody TeamForm newTeamForm) {
		
		Roles role1 = new Roles();
		role1.setId(4);
		role1.setRole("Participant");
		
		Domain domain = new Domain();
		domain.setDomainId(Long.parseLong(newTeamForm.getDomain()));
		
		User newUser1 = new User();
		newUser1.setEmail(newTeamForm.getE1());
		newUser1.setMobile(Long.parseLong(newTeamForm.getPh1()));
		newUser1.setName(newTeamForm.getN1());
		newUser1.setPassword(newTeamForm.getPass());
		newUser1.setRole_id(4);
		userRepository.save(newUser1);
		
		User newUser2 = new User();
		newUser2.setEmail(newTeamForm.getE2());
		newUser2.setMobile(Long.parseLong(newTeamForm.getPh2()));
		newUser2.setName(newTeamForm.getN2());
		newUser2.setPassword(newTeamForm.getPass());
		newUser2.setRole_id(4);
		userRepository.save(newUser2);
		
		User newUser3 = new User();
		newUser3.setEmail(newTeamForm.getE3());
		newUser3.setMobile(Long.parseLong(newTeamForm.getPh3()));
		newUser3.setName(newTeamForm.getN3());
		newUser3.setPassword(newTeamForm.getPass());
		newUser3.setRole_id(4);
		userRepository.save(newUser3);
		
		User newUser4 = new User();
		if(newTeamForm.getN4() != "") {
		newUser4.setEmail(newTeamForm.getE4());
		newUser4.setMobile(Long.parseLong(newTeamForm.getPh4()));
		newUser4.setName(newTeamForm.getN4());
		newUser4.setPassword(newTeamForm.getPass());
		newUser4.setRole_id(4);
		userRepository.save(newUser4);
		}
		
		Ideas newIdea = new Ideas();
		newIdea.setProblemStatement(newTeamForm.getProblemS());
		newIdea.setDescription(newTeamForm.getProblemD());
		newIdea.setDomain(domain);
		ideaRepository.save(newIdea);
		
		Team team = new Team();
		team.setTeamName(newTeamForm.getTeam());
		team.setIdea(newIdea);
		teamRepository.save(team);
		
		Participants p1 = new Participants();
		p1.setName(newTeamForm.getN1());
		p1.setEmail(newTeamForm.getE1());
		p1.setTeam(team);
		p1.setUser(newUser1);
		participantsRepository.save(p1);
		
		Participants p2 = new Participants();
		p2.setName(newTeamForm.getN2());
		p2.setEmail(newTeamForm.getE2());
		p2.setTeam(team);
		p2.setUser(newUser2);
		participantsRepository.save(p2);
		
		Participants p3 = new Participants();
		p3.setName(newTeamForm.getN3());
		p3.setEmail(newTeamForm.getE3());
		p3.setTeam(team);
		p3.setUser(newUser3);
		participantsRepository.save(p3);
		
		if(newTeamForm.getN4() != "") {
		Participants p4 = new Participants();
		p4.setName(newTeamForm.getN4());
		p4.setEmail(newTeamForm.getE4());
		p4.setTeam(team);
		p4.setUser(newUser4);
		participantsRepository.save(p4);
		}
		return newTeamForm;
		
    }
}
