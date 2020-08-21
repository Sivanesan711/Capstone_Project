package com.example.ImagineWall.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ImagineWall.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {

}
