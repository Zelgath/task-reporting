package com.tasks.taskreporting.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.NaturalId;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity(name = "Project")
@Table(name = "projects")
@EntityListeners(AuditingEntityListener.class)
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_project")
    private Long id;
    @NaturalId
    @Column(name = "project_description")
    private String description;
    @Column(name = "project_client")
    private String client;
    @Column(name = "project_monthly_cost")
    private Long monthlyCost;
    @Column(name = "project_start_date")
    private String startDate;
    @Column(name = "project_end_date")
    private String endDate;
    @Column(name = "project_total_cost")
    private Long totalCost;

    @ManyToMany(mappedBy = "projects")
    @JsonBackReference
    private List<Employee> employees = new ArrayList<>();

    public Project() {
    }

    public Project(Long id, String description, String client, Long monthlyCost, String startDate, String endDate, Long totalCost) {
        this.id = id;
        this.description = description;
        this.client = client;
        this.monthlyCost = monthlyCost;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalCost = totalCost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public Long getMonthlyCost() {
        return monthlyCost;
    }

    public void setMonthlyCost(Long monthlyCost) {
        this.monthlyCost = monthlyCost;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public Long getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Long totalCost) {
        this.totalCost = totalCost;
    }

//    @JsonIgnore
    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return id.equals(project.id) &&
                description.equals(project.description) &&
                client.equals(project.client) &&
                monthlyCost.equals(project.monthlyCost) &&
                startDate.equals(project.startDate) &&
                Objects.equals(endDate, project.endDate) &&
                Objects.equals(totalCost, project.totalCost) &&
                Objects.equals(employees, project.employees);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, client, monthlyCost, startDate, endDate, totalCost, employees);
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", client='" + client + '\'' +
                ", monthlyCost=" + monthlyCost +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", totalCost=" + totalCost +
                ", employees=" + employees +
                '}';
    }
}
