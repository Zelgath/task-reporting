package com.tasks.taskreporting;


import com.tasks.taskreporting.utils.ProjectIdsConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public class Starter implements CommandLineRunner {
    @Autowired
    private ProjectIdsConverter projectIdsConverter;

    @Override
    public void run(String... args) throws Exception {
//        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
        String text = "1p20p331p4444p";
        List<String> list = projectIdsConverter.getAllAssignedProjectsFromString(text);
        System.out.println(list.toString());

    }
}
