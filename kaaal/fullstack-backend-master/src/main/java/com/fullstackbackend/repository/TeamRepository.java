package com.fullstackbackend.repository;
import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstackbackend.model.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team,Integer>{
	
	Team findByTeamId(int id);
	List<Team> findTop3ByOrderByMarksDesc();

}
