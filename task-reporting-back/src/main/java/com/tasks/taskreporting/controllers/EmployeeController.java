package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Employee;
import com.tasks.taskreporting.domain.repositories.EmployeeRepository;
import com.tasks.taskreporting.utils.DateFormatterForAngularMaterial;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DateFormatterForAngularMaterial dffam;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }


//    @GetMapping("/employees/{id}")
//    public ResponseEntity<Optional<Employee>> getEmployeesById(@PathVariable(value = "id") Long employeeId) {
//        Optional<Employee> employee = employeeRepository.findById(employeeId);
//        return ResponseEntity.ok().body(employee);
//    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeesById(@PathVariable(value = "id") Long employeeId) throws ChangeSetPersister.NotFoundException {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
        return ResponseEntity.ok().body(employee);
    }

    @PostMapping("/employees")
    public Employee createEmployee(@Valid @RequestBody Employee employee)  {
        employee.setHireDate(dffam.changeData(employee.getHireDate()));
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId, @Valid @RequestBody Employee employeeDetails) throws ChangeSetPersister.NotFoundException {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ChangeSetPersister.NotFoundException ());

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setPhoneNumber(employeeDetails.getPhoneNumber());
        employee.setHireDate(dffam.changeData(employeeDetails.getHireDate()));
        employee.setJobId(employeeDetails.getJobId());
        employee.setSalary(employeeDetails.getSalary());
        employee.setManagerId(employeeDetails.getManagerId());
        employee.setDepartmentId(employeeDetails.getDepartmentId());
        final Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/employee/{id}")
    public Map<String, Boolean> deleteEmployee (@PathVariable(value = "id") Long employeeId) throws Exception {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
