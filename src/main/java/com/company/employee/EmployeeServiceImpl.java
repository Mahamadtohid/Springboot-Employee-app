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
    public List<Employee> readEmployees() {
        
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
    public String updateEmployee(Long id , Employee employee) {

        EmployeeEntity existingEmployee = employeeRepository.findById(id).get();
        // EmployeeEntity newEmployee = new EmployeeEntity();

        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setPhoneNumber(employee.getPhoneNumber());
        employeeRepository.save(existingEmployee);
        
        
        return "Employee updated successfully";
    }

    @Override
    public boolean deleteEmployee(Long id) {

        EmployeeEntity emp = employeeRepository.findById(id).get();
        employeeRepository.delete(emp);
        return true;
    }

    @Override
    public Employee readEmployee(Long id) {
       
        EmployeeEntity employeeEntity = employeeRepository.findById(id).get();

        Employee employee = new Employee();
        // employee.setId(employeeEntity.getId());
        // employee.setName(employeeEntity.getName());
        // employee.setEmail(employeeEntity.getEmail());
        // employee.setPhoneNumber(employeeEntity.getPhoneNumber());

        BeanUtils.copyProperties(employeeEntity, employee);

        return employee;
    }

}
