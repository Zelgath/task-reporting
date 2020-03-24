package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Job;
import com.tasks.taskreporting.domain.Project;
import com.tasks.taskreporting.services.JobService;
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
public class JobController {

    @Autowired
    private JobService jobService;


    @GetMapping("/jobs")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable(value = "id") Long jobId) throws ChangeSetPersister.NotFoundException {
        Job job = jobService.getJobById(jobId);
        return ResponseEntity.ok().body(job);
    }

    @PostMapping("/jobs")
    public Job createJob(@Valid @RequestBody Job job) {
        return jobService.createJob(job);
    }

    @PutMapping("/jobs/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable(value = "id") Long jobId, @Valid @RequestBody Job jobDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(jobService.updateJob(jobId, jobDetails));
    }

    @DeleteMapping("/jobs/{id}")
    public Map<String, Boolean> deleteJob(@PathVariable(value = "id") Long jobId) throws Exception {
        return jobService.deleteJob(jobId);
    }


}
