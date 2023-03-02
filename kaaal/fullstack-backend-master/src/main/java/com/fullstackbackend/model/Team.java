package com.fullstackbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Team {

	@Id
	@GeneratedValue
	private int teamId;
	
	private int panelistId;
	
	public int getPanelistId() {
		return panelistId;
	}

	public void setPanelistId(int panelistId) {
		this.panelistId = panelistId;
	}

	private String teamName;
	
	private String status = "pending";
	
	@Override
	public String toString() {
		return "Team [teamId=" + teamId + ", teamName=" + teamName + ", status=" + status + ", marks=" + marks
				+ ", idea=" + idea + "]";
	}
	
	private String gitHubLink;

	public String getGitHubLink() {
		return gitHubLink;
	}

	public void setGitHubLink(String gitHubLink) {
		this.gitHubLink = gitHubLink;
	}

	private int marks;
	
	private String newComment;
	
	public String getNewComment() {
		return newComment;
	}

	public void setNewComment(String newComment) {
		this.newComment = newComment;
	}

	
    public Ideas getIdea() {
		return idea;
	}

	public void setIdea(Ideas idea) {
		this.idea = idea;
	}

	@ManyToOne
    @JoinColumn(name = "ideaId")
    private Ideas idea;
	
	
	private String judgeList;
	
	public String getJudgeList() {
		return judgeList;
	}

	public void setJudgeList(String judgeList) {
		this.judgeList = judgeList;
	}

	public int getTeamId() {
		return teamId;
	}

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}



	
	
}
