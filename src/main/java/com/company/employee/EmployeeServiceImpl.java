package com.company.employee;
import java.util.List;
import java.util.ArrayList;

public class EmployeeServiceImpl implements EmployeeService {

    List<Employee> employees = new ArrayList<>();
    @Override
    public Employee createEmployee(Employee employee) {
        employees.add(employee);
        return employee;
    }

    @Override
    public List<Employee> readEmployee() {
        
        return employees;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        
        return employee;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        employees.remove(id);
        return true;
    }

}
