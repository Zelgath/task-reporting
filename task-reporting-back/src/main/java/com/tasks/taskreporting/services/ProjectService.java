package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Project;
import com.tasks.taskreporting.repositories.ProjectRepository;
import com.tasks.taskreporting.utils.DateFormatterForAngularMaterial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    DateFormatterForAngularMaterial dffam;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project getProjectById(Long projectId) throws ChangeSetPersister.NotFoundException {
        return projectRepository.findById(projectId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
    }

    public Project createProject(Project project) {
        project.setStartDate(dffam.changeData(project.getStartDate()));
        project.setEndDate(dffam.changeData(project.getEndDate()));
        return projectRepository.save(project);
    }

    public Project updateProject(Long projectId, Project projectDetails) throws ChangeSetPersister.NotFoundException {
        Project project = projectRepository.findById(projectId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        project.setDescription(projectDetails.getDescription());
        project.setClient(projectDetails.getClient());
        project.setMonthlyCost(projectDetails.getMonthlyCost());
        project.setStartDate(dffam.changeData(projectDetails.getStartDate()));
        project.setEndDate(dffam.changeData(projectDetails.getEndDate()));
        project.setTotalCost(projectDetails.getTotalCost());
        final Project updatedProject = projectRepository.save(project);
        return updatedProject;
    }

    public Map<String, Boolean> deleteProject(Long projectId) throws Exception {
        Project project = projectRepository.findById(projectId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        projectRepository.delete(project);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
