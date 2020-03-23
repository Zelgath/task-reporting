package com.tasks.taskreporting.domain;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "projects_assigment")
@EntityListeners(AuditingEntityListener.class)
public class ProjectsAssigment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_projects_assigment")
    private Long id;
    @Column(name = "id_employee")
    private String employeeId;
    @Column(name = "id_project")
    private String projectId;

    public ProjectsAssigment() {
    }

    public ProjectsAssigment(Long id, String employeeId, String projectId) {
        this.id = id;
        this.employeeId = employeeId;
        this.projectId = projectId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }
}
