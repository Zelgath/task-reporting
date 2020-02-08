package com.tasks.taskreporting.domain.repositories;

import com.tasks.taskreporting.domain.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
