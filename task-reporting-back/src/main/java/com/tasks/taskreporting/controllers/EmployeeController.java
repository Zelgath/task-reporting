package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Employee;
import com.tasks.taskreporting.domain.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }


    @GetMapping("/employees/{id}")
    public ResponseEntity<Optional<Employee>> getEmployeesById(@PathVariable(value = "id") Long employeeId) {
        Optional<Employee> employee = employeeRepository.findById(employeeId);
        return ResponseEntity.ok().body(employee);
    }

//    @PostMapping("/employees")
//    public Employee createEmployee(@Valid @RequestBody Employee employee) {
//        return employeeRepository.save(employee);
//    }

//    @PutMapping("/employees/{id}")
////    public ResponseEntity<Optional<Employee>> updateEmployee(@PathVariable(value = "id") Long employeeId, @Valid @RequestBody Employee employeeDetails) {
////        Optional<Employee> employee = employeeRepository.findById(employeeId);
////
////        employee.set
////    }
}
