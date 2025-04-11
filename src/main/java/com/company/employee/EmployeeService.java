package com.company.employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);
    List<Employee> readEmployee();

    Employee updateEmployee(Long id, Employee employee);
    boolean  deleteEmployee(Long id);
    
}
