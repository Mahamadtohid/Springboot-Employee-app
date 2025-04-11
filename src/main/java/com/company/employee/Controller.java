package com.company.employee;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class Controller {

    List<Employee> employees = new ArrayList<>();

    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @PostMapping("employees")
    public String postMethodName(@RequestBody Employee employee) {
        
        employees.add(employee);
        return "employee added successfully";
    }
    
    
    
}
