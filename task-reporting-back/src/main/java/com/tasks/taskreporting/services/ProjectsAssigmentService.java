package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.ProjectsAssigment;
import com.tasks.taskreporting.repositories.ProjectsAssigmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProjectsAssigmentService {
    @Autowired
    private ProjectsAssigmentRepository projectsAssigmentRepository;

    public List<ProjectsAssigment> getAllProjectsAssigments () {
        return projectsAssigmentRepository.findAll();
    }

    public ProjectsAssigment getProjectsAssigmentById (Long projectsAssigmentId) throws ChangeSetPersister.NotFoundException {
        return projectsAssigmentRepository.findById(projectsAssigmentId).orElseThrow(()->new ChangeSetPersister.NotFoundException ());
    }

    public ProjectsAssigment createProjectsAssigment (ProjectsAssigment projectsAssigment) {
        return projectsAssigmentRepository.save(projectsAssigment);
    }

    public ProjectsAssigment updateProjectsAssigment (Long projectsAssigmentId, ProjectsAssigment projectsAssigmentDetails) throws ChangeSetPersister.NotFoundException {
        ProjectsAssigment projectsAssigment = projectsAssigmentRepository.findById(projectsAssigmentId).orElseThrow(()->new ChangeSetPersister.NotFoundException());
        projectsAssigment.setEmployeeId(projectsAssigmentDetails.getEmployeeId());
        projectsAssigment.setProjectId(projectsAssigmentDetails.getProjectId());

        final ProjectsAssigment updatedProjectsAssigment = projectsAssigmentRepository.save(projectsAssigment);
        return updatedProjectsAssigment;
    }

    public Map<String, Boolean> deleteProjectsAssigment (Long projectsAssigmentId) throws Exception {
        ProjectsAssigment projectsAssigment = projectsAssigmentRepository.findById(projectsAssigmentId).orElseThrow(()->new ChangeSetPersister.NotFoundException());

        projectsAssigmentRepository.delete(projectsAssigment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
