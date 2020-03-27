package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Contract;
import com.tasks.taskreporting.domain.Department;
import com.tasks.taskreporting.services.ContractService;
import com.tasks.taskreporting.services.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/departments")
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }

    @GetMapping("/departments/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable(value = "id") Long departmentId) throws ChangeSetPersister.NotFoundException {
        Department department = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok().body(department);
    }

    @PostMapping("/departments")
    public Department createDepartment(@Valid @RequestBody Department department) {
        return departmentService.createDepartment(department);
    }

    @PutMapping("/departments/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable(value = "id") Long departmentId, @Valid @RequestBody Department departmentDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(departmentService.updateDepartment(departmentId, departmentDetails));
    }

    @DeleteMapping("/departments/{id}")
    public Map<String, Boolean> deleteDepartment(@PathVariable(value = "id") Long departmentId) throws Exception {
        return departmentService.deleteDepartment(departmentId);
    }
}
