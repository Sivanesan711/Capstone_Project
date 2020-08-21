package com.example.ImagineWall.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ImagineWall.dao.ContactRepository;
import com.example.ImagineWall.error.ResourceNotFoundException;
import com.example.ImagineWall.model.Contact;

@Transactional

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/cntct")
public class ContactController {
    @Autowired
    private ContactRepository ContactRepository;
    
    @RequestMapping("/hello")
	public String index() {
		return "Spring Boot Example!!";
	}

    @GetMapping("/contacts")
    public List<Contact> getAllClasss() {
        return  (List<Contact>) ContactRepository.findAll();
        //return (List<Class>) ClasseRepository.findAll();
    }


    @GetMapping("/contacts/{id}")
    public ResponseEntity<Contact> getClassById(@PathVariable(value = "id") Long email)
        throws ResourceNotFoundException {
        Contact contacts = ContactRepository.findById(email)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));
        return ResponseEntity.ok().body(contacts);
    }
    
    @PostMapping("/contacts")
    public Contact createClass(@Valid @RequestBody Contact contacts) {
        return ContactRepository.save(contacts);
    }

    @PutMapping("/contacts/{id}")
    public ResponseEntity<Contact> updateClass(@PathVariable(value = "id") Long email,
         @Valid @RequestBody Contact contactsDetails) throws ResourceNotFoundException {
        Contact contacts = ContactRepository.findById(email)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));

        contacts.setMessage(contactsDetails.getMessage());
        contacts.setEmail(contactsDetails.getEmail());
        contacts.setName(contactsDetails.getName());
        final Contact updatedClass = ContactRepository.save(contacts);
        return ResponseEntity.ok(updatedClass);
    }

    @DeleteMapping("/contacts/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long email)
         throws ResourceNotFoundException {
        Contact contacts = ContactRepository.findById(email)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));

        ContactRepository.delete(contacts);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
