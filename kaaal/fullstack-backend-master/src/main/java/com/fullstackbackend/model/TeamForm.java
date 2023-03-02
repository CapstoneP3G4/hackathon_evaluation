package com.fullstackbackend.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class TeamForm {
	@Id
	@GeneratedValue
	private int teamFormId;
	
private String domain;

@Column(unique = true)
private String e1;

@Column(unique = true)
private String e2;

@Column(unique = true)
private String e3;

@Column(unique = true)
private String e4;


private String n1;

private String n2;

private String n3;

private String n4;

@Column(unique = true)
private String ph1;

@Column(unique = true)
private String ph2;

@Column(unique = true)
private String ph3;

@Column(unique = true)
private String ph4;

private String pass;

public String getPass() {
	return pass;
}

public void setPass(String pass) {
	this.pass = pass;
}

private String problemD;

private String problemS;

private String team;

public int getTeamFormId() {
	return teamFormId;
}

public void setTeamFormId(int teamFormId) {
	this.teamFormId = teamFormId;
}

public String getDomain() {
	return domain;
}

public void setDomain(String domain) {
	this.domain = domain;
}

public String getE1() {
	return e1;
}

public void setE1(String e1) {
	this.e1 = e1;
}

public String getE2() {
	return e2;
}

public void setE2(String e2) {
	this.e2 = e2;
}

public String getE3() {
	return e3;
}

public void setE3(String e3) {
	this.e3 = e3;
}

public String getE4() {
	return e4;
}

public void setE4(String e4) {
	this.e4 = e4;
}

public String getN1() {
	return n1;
}

public void setN1(String n1) {
	this.n1 = n1;
}

public String getN2() {
	return n2;
}

public void setN2(String n2) {
	this.n2 = n2;
}

public String getN3() {
	return n3;
}

public void setN3(String n3) {
	this.n3 = n3;
}

public String getN4() {
	return n4;
}

public void setN4(String n4) {
	this.n4 = n4;
}

public String getPh1() {
	return ph1;
}

public void setPh1(String ph1) {
	this.ph1 = ph1;
}

public String getPh2() {
	return ph2;
}

public void setPh2(String ph2) {
	this.ph2 = ph2;
}

public String getPh3() {
	return ph3;
}

public void setPh3(String ph3) {
	this.ph3 = ph3;
}

public String getPh4() {
	return ph4;
}

public void setPh4(String ph4) {
	this.ph4 = ph4;
}

public String getProblemD() {
	return problemD;
}

public void setProblemD(String problemD) {
	this.problemD = problemD;
}

public String getProblemS() {
	return problemS;
}

public void setProblemS(String problemS) {
	this.problemS = problemS;
}

public String getTeam() {
	return team;
}

public void setTeam(String team) {
	this.team = team;
}




}
