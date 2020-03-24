package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Job;
import com.tasks.taskreporting.domain.Project;
import com.tasks.taskreporting.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }
    public Job getJobById(Long jobId) throws ChangeSetPersister.NotFoundException {
        return jobRepository.findById(jobId).orElseThrow(()-> new ChangeSetPersister.NotFoundException ());
    }

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public Job updateJob(Long jobId, Job jobDetails) throws ChangeSetPersister.NotFoundException {
        Job job = jobRepository.findById(jobId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        job.setDescription(jobDetails.getDescription());
        final Job updatedJob = jobRepository.save(job);
        return updatedJob;
    }

    public Map<String, Boolean> deleteJob(Long jobId) throws Exception {
        Job job = jobRepository.findById(jobId).orElseThrow(() -> new ChangeSetPersister.NotFoundException());

        jobRepository.delete(job);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
