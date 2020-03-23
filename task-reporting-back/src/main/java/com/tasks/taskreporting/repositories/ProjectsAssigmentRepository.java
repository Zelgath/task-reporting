package com.tasks.taskreporting.repositories;

import com.tasks.taskreporting.domain.ProjectsAssigment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectsAssigmentRepository extends JpaRepository <ProjectsAssigment, Long> {
}
