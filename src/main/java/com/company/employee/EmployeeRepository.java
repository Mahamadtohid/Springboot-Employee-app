package com.company.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity , Long>{
    // Custom query methods can be defined here if needed
    // For example, findByEmail(String email) or findByName(String name)
    
}
