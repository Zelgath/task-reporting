package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Grade;
import com.tasks.taskreporting.domain.Location;
import com.tasks.taskreporting.services.GradeService;
import com.tasks.taskreporting.services.LocationService;
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
public class GradeController {

    @Autowired
    private GradeService gradeService;


    @GetMapping("/grades")
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/grades/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable(value = "id") Long gradeId) throws ChangeSetPersister.NotFoundException {
        Grade grade = gradeService.getGradeById(gradeId);
        return ResponseEntity.ok().body(grade);
    }

    @PostMapping("/grades")
    public Grade createGrade(@Valid @RequestBody Grade grade) {
        return gradeService.createGrade(grade);
    }

    @PutMapping("/grades/{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable(value = "id") Long gradeId, @Valid @RequestBody Grade gradeDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(gradeService.updateGrade(gradeId, gradeDetails));
    }

    @DeleteMapping("/grades/{id}")
    public Map<String, Boolean> deleteGrade(@PathVariable(value = "id") Long gradeId) throws Exception {
        return gradeService.deleteGrade(gradeId);
    }

}
