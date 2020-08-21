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

import com.example.ImagineWall.dao.RequestRepository;
import com.example.ImagineWall.error.ResourceNotFoundException;
import com.example.ImagineWall.model.Request;

@Transactional

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rqust")
public class RequestController {
    @Autowired
    private RequestRepository RequestRepository;
    
    @RequestMapping("/hello")
	public String index() {
		return "Spring Boot Example!!";
	}

    @GetMapping("/requests")
    public List<Request> getAllClasss() {
        return  (List<Request>) RequestRepository.findAll();
        //return (List<Class>) ClasseRepository.findAll();
    }


    @GetMapping("/requests/{id}")
    public ResponseEntity<Request> getClassById(@PathVariable(value = "id") Long email)
        throws ResourceNotFoundException {
        Request requests = RequestRepository.findById(email)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));
        return ResponseEntity.ok().body(requests);
    }
    
    @PostMapping("/requests")
    public Request createClass(@Valid @RequestBody Request requests) {
        return RequestRepository.save(requests);
    }

    @PutMapping("/requests/{id}")
    public ResponseEntity<Request> updateClass(@PathVariable(value = "id") Long email,
         @Valid @RequestBody Request requestsDetails) throws ResourceNotFoundException {
        Request requests = RequestRepository.findById(email)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));

        requests.setToday_date(requestsDetails.getToday_date());
        requests.setDays_to_complete(requestsDetails.getDays_to_complete());
        requests.setEstimated_rate(requestsDetails.getEstimated_rate());
        requests.setSuggestion(requestsDetails.getSuggestion());
        requests.setMobile(requestsDetails.getMobile());
        requests.setEmail(requestsDetails.getEmail());
        requests.setName(requestsDetails.getName());
        final Request updatedClass = RequestRepository.save(requests);
        return ResponseEntity.ok(updatedClass);

    }

    @DeleteMapping("/requests/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long email)
         throws ResourceNotFoundException {
        Request requests = RequestRepository.findById(email)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + email));

        RequestRepository.delete(requests);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}

