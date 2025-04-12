package com.company.employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);
    List<Employee> readEmployees();

    String updateEmployee(Long id, Employee employee);
    boolean  deleteEmployee(Long id);

    Employee readEmployee(Long id);
    
}
