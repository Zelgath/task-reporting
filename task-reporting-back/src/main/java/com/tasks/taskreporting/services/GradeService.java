package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Grade;
import com.tasks.taskreporting.domain.Location;
import com.tasks.taskreporting.repositories.GradeRepository;
import com.tasks.taskreporting.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GradeService {

    @Autowired
    private GradeRepository gradeRepository;


    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    public Grade getGradeById(Long gradeId) throws ChangeSetPersister.NotFoundException {
        return gradeRepository.findById(gradeId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
    }

    public Grade createGrade(Grade grade) {
        return gradeRepository.save(grade);
    }

    public Grade updateGrade(Long gradeId, Grade gradeDetails) throws ChangeSetPersister.NotFoundException {
        Grade grade = gradeRepository.findById(gradeId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        grade.setDescription(gradeDetails.getDescription());
        grade.setMinSalary(gradeDetails.getMinSalary());
        grade.setMaxSalary(gradeDetails.getMaxSalary());

        final Grade updatedGrade = gradeRepository.save(grade);
        return updatedGrade;
    }

    public Map<String, Boolean> deleteGrade(Long gradeId) throws Exception {
        Grade grade = gradeRepository.findById(gradeId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        gradeRepository.delete(grade);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
