package com.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Events {
	@Id
	@GeneratedValue
	private Long eventId;
	
	private String eventName;
	private String description;
	private String startDate;
	private String endDate;
	
public Long getEventId() {
	return eventId;
}
public void setEventId(Long eventId) {
	this.eventId = eventId;
}
public String getEventName() {
	return eventName;
}
public void setEventName(String eventName) {
	this.eventName = eventName;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getStartDate() {
	return startDate;
}
public void setStartDate(String startDate) {
	this.startDate = startDate;
}
public String getEndDate() {
	return endDate;
}
public void setEndDate(String endDate) {
	this.endDate = endDate;
}

}
