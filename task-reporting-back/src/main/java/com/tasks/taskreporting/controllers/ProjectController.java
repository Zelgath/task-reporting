package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Project;
import com.tasks.taskreporting.services.ProjectService;
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
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") Long projectId) throws ChangeSetPersister.NotFoundException {
        Project project = projectService.getProjectById(projectId);
        return ResponseEntity.ok().body(project);
    }

    @PostMapping("/projects")
    public Project createProject(@Valid @RequestBody Project project) {
        return projectService.createProject(project);
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable(value = "id") Long projectId, @Valid @RequestBody Project projectDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(projectService.updateProject(projectId, projectDetails));
    }

    @DeleteMapping("/projects/{id}")
    public Map<String, Boolean> deleteProject(@PathVariable(value = "id") Long projectId) throws Exception {
        return projectService.deleteProject(projectId);
    }


}
