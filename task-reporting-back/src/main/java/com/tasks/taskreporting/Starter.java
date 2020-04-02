package com.tasks.taskreporting;


import com.tasks.taskreporting.domain.ProjectsAssigment;
import com.tasks.taskreporting.repositories.ProjectsAssigmentRepository;
import com.tasks.taskreporting.services.ProjectsAssigmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class Starter implements CommandLineRunner {
    @Autowired
    private ProjectsAssigmentService projectsAssigmentService;

    @Override
    public void run(String... args) throws Exception {






    }
}
