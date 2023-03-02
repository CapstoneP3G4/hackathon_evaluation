package com.fullstackbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstackbackend.model.Ideas;
import com.fullstackbackend.repository.IdeasRepository;

@Service
public class IdeaUpdateService {
	
	IdeasRepository ideaRepository;
	
	public Ideas updateTeamDetails(Ideas newIdea) {
		return ideaRepository.save(newIdea);
	}

}
