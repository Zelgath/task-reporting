package com.tasks.taskreporting.domain;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
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
    @Column(name = "id_job")
    private Long idJob;
    @Column(name = "id_location")
    private Long idLocation;
    @Column(name = "id_contract_active")
    private Long idContractActive;
    @Column(name = "id_manager")
    private Long idManager;
    @Column(name = "id_department")
    private Long idDepartment;
    @Column(name = "id_grade")
    private Long idGrade;
    @Column(name = "is_manager")
    private boolean isManager;
    @Column(name = "is_officer")
    private boolean isOfficer;
    @Column(name = "is_active")
    private boolean isActive;
    @Column(name = "id_project_1")
    private Long idProject1;
    @Column(name = "id_project_2")
    private Long idProject2;
    @Column(name = "id_project_3")
    private Long idProject3;
    @Column(name = "id_project_4")
    private Long idProject4;
    @Column(name = "id_project_5")
    private Long idProject5;

    public Employee() {
    }

    public Employee(Long id, String firstName, String lastName, String email, String phoneNumber, Long idJob, Long idLocation, Long idContractActive, Long idManager, Long idDepartment, Long idGrade, boolean isManager, boolean isOfficer, boolean isActive, Long idProject1, Long idProject2, Long idProject3, Long idProject4, Long idProject5) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.idJob = idJob;
        this.idLocation = idLocation;
        this.idContractActive = idContractActive;
        this.idManager = idManager;
        this.idDepartment = idDepartment;
        this.idGrade = idGrade;
        this.isManager = isManager;
        this.isOfficer = isOfficer;
        this.isActive = isActive;
        this.idProject1 = idProject1;
        this.idProject2 = idProject2;
        this.idProject3 = idProject3;
        this.idProject4 = idProject4;
        this.idProject5 = idProject5;
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

    public Long getIdJob() {
        return idJob;
    }

    public void setIdJob(Long idJob) {
        this.idJob = idJob;
    }

    public Long getIdLocation() {
        return idLocation;
    }

    public void setIdLocation(Long idLocation) {
        this.idLocation = idLocation;
    }

    public Long getIdContractActive() {
        return idContractActive;
    }

    public void setIdContractActive(Long idContractActive) {
        this.idContractActive = idContractActive;
    }

    public Long getIdManager() {
        return idManager;
    }

    public void setIdManager(Long idManager) {
        this.idManager = idManager;
    }

    public Long getIdDepartment() {
        return idDepartment;
    }

    public void setIdDepartment(Long idDepartment) {
        this.idDepartment = idDepartment;
    }

    public Long getIdGrade() {
        return idGrade;
    }

    public void setIdGrade(Long idGrade) {
        this.idGrade = idGrade;
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

    public Long getIdProject1() {
        return idProject1;
    }

    public void setIdProject1(Long idProject1) {
        this.idProject1 = idProject1;
    }

    public Long getIdProject2() {
        return idProject2;
    }

    public void setIdProject2(Long idProject2) {
        this.idProject2 = idProject2;
    }

    public Long getIdProject3() {
        return idProject3;
    }

    public void setIdProject3(Long idProject3) {
        this.idProject3 = idProject3;
    }

    public Long getIdProject4() {
        return idProject4;
    }

    public void setIdProject4(Long idProject4) {
        this.idProject4 = idProject4;
    }

    public Long getIdProject5() {
        return idProject5;
    }

    public void setIdProject5(Long idProject5) {
        this.idProject5 = idProject5;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", idJob=" + idJob +
                ", idLocation=" + idLocation +
                ", idContractActive=" + idContractActive +
                ", idManager=" + idManager +
                ", idDepartment=" + idDepartment +
                ", idGrade=" + idGrade +
                ", isManager=" + isManager +
                ", isOfficer=" + isOfficer +
                ", isActive=" + isActive +
                ", idProject1=" + idProject1 +
                ", idProject2=" + idProject2 +
                ", idProject3=" + idProject3 +
                ", idProject4=" + idProject4 +
                ", idProject5=" + idProject5 +
                '}';
    }
}
