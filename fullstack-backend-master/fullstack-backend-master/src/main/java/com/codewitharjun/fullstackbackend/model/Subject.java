package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Subject {

    @Id
    @GeneratedValue
    private Long id;
    private String subname;
    private String credit;
    private String subjectcode;
    private String basket;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getSubname() {
		return subname;
	}

	public void setSubname(String subname) {
		this.subname = subname;
	}

	public String getCredit() {
		return credit;
	}

	public void setCredit(String credit) {
		this.credit = credit;
	}

	public String getSubjectcode() {
		return subjectcode;
	}

	public void setSubjectcode(String subjectcode) {
		this.subjectcode = subjectcode;
	}

	public String getBasket() {
		return basket;
	}

	public void setBasket(String basket) {
		this.basket = basket;
	}

}
