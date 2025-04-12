package com.company.employee;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    
    @Override
    public Employee createEmployee(Employee employee) {
        // employees.add(employee);

        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> readEmployee() {
        
        List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for(EmployeeEntity employeeEnity : employeesList){

            Employee emp = new Employee();
            emp.setId(employeeEnity.getId());
            emp.setName(employeeEnity.getName());
            emp.setEmail(employeeEnity.getEmail());

            employees.add(emp);
            

        }

        return employees;

    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        
        
        return employee;
    }

    @Override
    public boolean deleteEmployee(Long id) {
        // employees.remove(id);
        EmployeeEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
    }

}
