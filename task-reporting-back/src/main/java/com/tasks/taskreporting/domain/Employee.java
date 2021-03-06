package com.tasks.taskreporting.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity(name = "Employee")
@Table(name = "employees")
@EntityListeners(AuditingEntityListener.class)

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_employee")
    private Long id;
    @Column(name = "employee_first_name")
    private String firstName;
    @Column(name = "employee_last_name")
    private String lastName;
    @Column(name = "employee_email")
    private String email;
    @Column(name = "employee_phone_number")
    private String phoneNumber;

    @OneToOne
    @JoinColumn(name = "id_job")
    private Job job;

    @OneToOne
    @JoinColumn(name = "id_location")
    private Location location;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_contract_active")
    private Contract contractActive;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_contract_on_hold")
    private Contract contractOnHold;

    @Column(name = "id_manager")
    private Long idManager;


    @OneToOne
    @JoinColumn(name = "id_department")
    private Department department;


    @Column(name = "is_manager")
    private boolean isManager;

    @Column(name = "is_officer")
    private boolean isOfficer;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "projects_assigment",
                joinColumns = @JoinColumn(name = "id_employee"),
                inverseJoinColumns = @JoinColumn(name = "id_project")
    )
    @JsonManagedReference
    private List<Project> projects = new ArrayList<>();


    public Employee() {
    }

    public Employee(Long id, String firstName, String lastName, String email, String phoneNumber, Job job, Location location, Contract contractActive, Contract contractOnHold, Long idManager, Department department, boolean isManager, boolean isOfficer, boolean isActive, List<Project> projects) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.job = job;
        this.location = location;
        this.contractActive = contractActive;
        this.contractOnHold = contractOnHold;
        this.idManager = idManager;
        this.department = department;
        this.isManager = isManager;
        this.isOfficer = isOfficer;
        this.isActive = isActive;
        this.projects = projects;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    @JsonIgnore
    public Contract getContractActive() {
        return contractActive;
    }

    public void setContractActive(Contract contractActive) {
        this.contractActive = contractActive;
    }

    @JsonIgnore
    public Contract getContractOnHold() {
        return contractOnHold;
    }

    public void setContractOnHold(Contract contractOnHold) {
        this.contractOnHold = contractOnHold;
    }

    public Long getIdManager() {
        return idManager;
    }

    public void setIdManager(Long idManager) {
        this.idManager = idManager;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public boolean isManager() {
        return isManager;
    }

    public void setManager(boolean manager) {
        isManager = manager;
    }

    public boolean isOfficer() {
        return isOfficer;
    }

    public void setOfficer(boolean officer) {
        isOfficer = officer;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void addProject(Project project) {
        projects.add(project);
        project.getEmployees().add(this);
    }

    public void removeProject(Project project) {
        projects.remove(project);
        project.getEmployees().remove(this);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return isManager == employee.isManager &&
                isOfficer == employee.isOfficer &&
                isActive == employee.isActive &&
                id.equals(employee.id) &&
                firstName.equals(employee.firstName) &&
                lastName.equals(employee.lastName) &&
                email.equals(employee.email) &&
                phoneNumber.equals(employee.phoneNumber) &&
                job.equals(employee.job) &&
                location.equals(employee.location) &&
                Objects.equals(contractActive, employee.contractActive) &&
                Objects.equals(contractOnHold, employee.contractOnHold) &&
                Objects.equals(idManager, employee.idManager) &&
                department.equals(employee.department) &&
                Objects.equals(projects, employee.projects);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email, phoneNumber, job, location, contractActive, contractOnHold, idManager, department, isManager, isOfficer, isActive, projects);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", idJob=" + job +
                ", idLocation=" + location +
                ", idContractActive=" + contractActive +
                ", idManager=" + idManager +
                ", idDepartment=" + department +
                ", isManager=" + isManager +
                ", isOfficer=" + isOfficer +
                ", isActive=" + isActive +
                ", projects=" + projects +
                '}';
    }
}
