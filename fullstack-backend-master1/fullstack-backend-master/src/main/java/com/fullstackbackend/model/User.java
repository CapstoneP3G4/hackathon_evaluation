package com.fullstackbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    
	@ManyToOne
    @JoinColumn(name = "roleId")
    private Roles role;
    
    public Roles getRole() {
		return role;
	}


	public void setRole(Roles role) {
		this.role = role;
	}


	@Column(unique = true)
    private Long mobile;
    
    @Column(unique = true)
    private String email;
    
    
    private String password;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Long getMobile() {
		return mobile;
	}


	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}

    

}
