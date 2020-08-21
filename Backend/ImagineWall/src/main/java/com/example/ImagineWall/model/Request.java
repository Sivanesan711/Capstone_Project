package com.example.ImagineWall.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "requests")
public class Request {

	private long id;
	private String name;
	private String email;
	private String mobile;
	private String suggestion;
	private String estimated_rate;
	private String days_to_complete;
	private String today_date;
	
	
	public Request() {
		
	}
	
	public Request(String name, String email, String mobile, String suggestion, String estimated_rate, String days_to_complete, String today_date) {
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.suggestion = suggestion;
		this.estimated_rate = estimated_rate;
		this.days_to_complete = days_to_complete;
		this.today_date = today_date;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@Column(name = "mobile", nullable = false)
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	@Column(name = "suggestion", nullable = false)
	public String getSuggestion() {
		return suggestion;
	}
	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
	
	@Column(name = "estimated_rate", nullable = false)
	public String getEstimated_rate() {
		return estimated_rate;
	}
	public void setEstimated_rate(String estimated_rate) {
		this.estimated_rate = estimated_rate;
	}
	
	@Column(name = "days_to_complete", nullable = false)
	public String getDays_to_complete() {
		return days_to_complete;
	}
	public void setDays_to_complete(String days_to_complete) {
		this.days_to_complete = days_to_complete;
	}
	
	@Column(name = "today_date", nullable = false)
	public String getToday_date() {
		return today_date;
	}
	public void setToday_date(String today_date) {
		this.today_date = today_date;
	}

	@Override
	public String toString() {
		return "Class [id=" + id + ", name=" + name + ", email=" + email + ", mobile=" + mobile
				+ ", suggestion=" + suggestion + ", estimated_rate=" + estimated_rate + ", days_to_complete=" + days_to_complete + ", today_date=" + today_date + "]";
	}
	
}


