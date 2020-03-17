package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Employee;
import com.tasks.taskreporting.repositories.EmployeeRepository;
import com.tasks.taskreporting.utils.DateFormatterForAngularMaterial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DateFormatterForAngularMaterial dffam;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long employeeId) throws ChangeSetPersister.NotFoundException {
        return employeeRepository.findById(employeeId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long employeeId, Employee employeeDetails) throws ChangeSetPersister.NotFoundException{
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ChangeSetPersister.NotFoundException ());

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhoneNumber(employeeDetails.getPhoneNumber());
        employee.setIdJob(employeeDetails.getIdJob());
        employee.setIdLocation(employeeDetails.getIdLocation());
        employee.setIdContractActive(employeeDetails.getIdContractActive());
        employee.setIdManager(employeeDetails.getIdManager());
        employee.setIdDepartment(employeeDetails.getIdDepartment());
        employee.setIdGrade(employeeDetails.getIdGrade());
        employee.setManager(employeeDetails.isManager());
        employee.setOfficer(employeeDetails.isOfficer());
        employee.setActive(employeeDetails.isActive());
        employee.setIdProject1(employeeDetails.getIdProject1());
        employee.setIdProject2(employeeDetails.getIdProject2());
        employee.setIdProject3(employeeDetails.getIdProject3());
        employee.setIdProject4(employeeDetails.getIdProject4());
        employee.setIdProject5(employeeDetails.getIdProject5());
        final Employee updatedEmployee = employeeRepository.save(employee);
        return updatedEmployee;
    }

    public Map<String, Boolean> deleteEmployee(Long employeeId) throws Exception {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
