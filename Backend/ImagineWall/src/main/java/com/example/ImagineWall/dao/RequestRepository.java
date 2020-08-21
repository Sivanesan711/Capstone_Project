package com.example.ImagineWall.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ImagineWall.model.Request;


public interface RequestRepository extends JpaRepository<Request,Long> {

}
