package com.fullstackbackend.model;

public class UserDto {

	private String email;
	private String oldPassword;
	private String newPassword;
	
	
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getOldPassword() {
		return oldPassword;
	}
	
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	
	public String getNewPassword() {
		return newPassword;
	}
	
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "UserDto [email=" + email + ", oldPassword=" + oldPassword + ", newPassword=" + newPassword + "]";
	}
	
	
	
}
