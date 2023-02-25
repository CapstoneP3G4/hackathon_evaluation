package com.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fullstackbackend.model.Comment;
import com.fullstackbackend.repository.CommentRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CommentController {

	@Autowired
	CommentRepository commentRepository;
	
	@PostMapping("/comment")
    Comment newComment(@RequestBody Comment newComment) {
        return commentRepository.save(newComment);
    }

	@GetMapping("/getComment")
	List<Comment> getAllComment() {
		return commentRepository.findAll();	
    }
}
