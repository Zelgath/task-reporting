package com.tasks.taskreporting.utils;

import com.tasks.taskreporting.domain.Project;
import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Component
public class ProjectIdsConverter {

    public ProjectIdsConverter() {
    }

    public List<String> getAllAssignedProjectsFromString (String projectIdsString) {
        List<String> stringList = Pattern.compile("p").splitAsStream(projectIdsString).collect(Collectors.toList());
        return stringList;
    }
}
