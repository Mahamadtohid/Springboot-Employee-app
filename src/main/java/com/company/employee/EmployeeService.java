package com.company.employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);
    List<Employee> readEmployee();

    String updateEmployee(Long id, Employee employee);
    boolean  deleteEmployee(Long id);
    
}
