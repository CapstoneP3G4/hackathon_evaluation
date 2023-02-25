package com.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Comment {
	
	@Id
	@GeneratedValue
	private Long Id;
	
	private String commentStatement;
	
	@ManyToOne
    @JoinColumn(name = "ideaId")
    private Ideas idea;
	
	@ManyToOne
    @JoinColumn(name = "userId")
    private User user;
	
    public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getCommentStatement() {
		return commentStatement;
	}

	public void setCommentStatement(String commentStatement) {
		this.commentStatement = commentStatement;
	}

	public Ideas getIdea() {
		return idea;
	}

	public void setIdea(Ideas idea) {
		this.idea = idea;
	}


}
