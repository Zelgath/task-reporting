package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Contract;
import com.tasks.taskreporting.domain.Department;
import com.tasks.taskreporting.repositories.ContractRepository;
import com.tasks.taskreporting.repositories.DepartmentRepository;
import com.tasks.taskreporting.utils.DateFormatterForAngularMaterial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;


    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    public Department getDepartmentById(Long departmentId) throws ChangeSetPersister.NotFoundException {
        return departmentRepository.findById(departmentId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());
    }

    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    public Department updateDepartment(Long departmentId, Department departmentDetails) throws ChangeSetPersister.NotFoundException{
        Department department = departmentRepository.findById(departmentId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        department.setDescription(departmentDetails.getDescription());
        final Department updatedDepartment = departmentRepository.save(department);
        return updatedDepartment;
    }

    public Map<String, Boolean> deleteDepartment(Long departmentId) throws Exception {
        Department department = departmentRepository.findById(departmentId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        departmentRepository.delete(department);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
