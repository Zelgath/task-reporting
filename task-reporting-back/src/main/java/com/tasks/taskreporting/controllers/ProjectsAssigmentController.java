package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.ProjectsAssigment;
import com.tasks.taskreporting.services.ProjectsAssigmentService;
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
public class ProjectsAssigmentController {
    @Autowired
    private ProjectsAssigmentService projectsAssigmentService;

    @GetMapping("/projectsAssigment")
    public List<ProjectsAssigment> getAllProjects() {
        return projectsAssigmentService.getAllProjectsAssigments();
    }

    @GetMapping("/projectsAssigment/{id}")
    public ResponseEntity<ProjectsAssigment> getProjectById(@PathVariable(value = "id") Long projectsAssigmentId) throws ChangeSetPersister.NotFoundException {
        ProjectsAssigment projectsAssigment = projectsAssigmentService.getProjectsAssigmentById(projectsAssigmentId);
        return ResponseEntity.ok().body(projectsAssigment);
    }

    @PostMapping("/projectsAssigment")
    public ProjectsAssigment createProject(@Valid @RequestBody ProjectsAssigment projectsAssigment) {
        return projectsAssigmentService.createProjectsAssigment(projectsAssigment);
    }

    @PutMapping("/projectsAssigment/{id}")
    public ResponseEntity<ProjectsAssigment> updateProject(@PathVariable(value = "id") Long projectAssigmentId, @Valid @RequestBody ProjectsAssigment projectsAssigmentDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(projectsAssigmentService.updateProjectsAssigment(projectAssigmentId, projectsAssigmentDetails));
    }

    @DeleteMapping("/projectsAssigment/{id}")
    public Map<String, Boolean> deleteProject(@PathVariable(value = "id") Long projectsAssigmentId) throws Exception {
        return projectsAssigmentService.deleteProjectsAssigment(projectsAssigmentId);
    }

    @PostMapping("/deleteProjectsAssigment")
    public Map<String, Boolean> deleteProjectsAssigment(@RequestBody ProjectsAssigment projectsAssigmentDetails) throws Exception {
        Long idToDelete = projectsAssigmentService.findProjectsAssigmentByFields(projectsAssigmentDetails.getProjectId(), projectsAssigmentDetails.getEmployeeId()).getId();
       return projectsAssigmentService.deleteProjectsAssigment(idToDelete);
    }

//    @DeleteMapping("/projectsAssigment")
//    public Map<String, Boolean> deleteProjectAssigment(@RequestBody)
}
