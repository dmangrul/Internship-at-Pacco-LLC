package net.restapi.springbootbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.restapi.springbootbackend.model.Address;

@RestController
@RequestMapping("api")
public class UserController {
    
    @GetMapping("restapicall")
    public String getRestApiInfo() {
        return "Successful REST API Call from Spring Boot Backend. \n Customer Charge: $50.00 ";
    }

    @GetMapping("address")
    public Address getAddress() {
        Address test = new Address("123 Example St", "", "Chantilly", "VA", "20152");
        return test;
    }
}
