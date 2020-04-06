package com.tasks.taskreporting.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity(name = "Contract")
@Table(name = "contracts")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_contract")
    private Long id;
    @Column(name = "contract_type")
    private String type;
    @Column(name = "contract_start_date")
    private String startDate;
    @Column(name = "contract_end_date")
    private String endDate;

    @OneToOne
    @JoinColumn(name = "id_grade")
    private Grade grade;

    @Column(name = "contract_salary_factor")
    private Double salaryFactor;

    @Column(name = "contract_is_active")
    private Boolean isActive;

    @Column(name = "contract_is_on_hold")
    private Boolean isOnHold;

    @OneToOne(mappedBy = "contractActive", cascade = CascadeType.ALL,
    fetch = FetchType.LAZY, optional = false)
    private Employee employee;

    @OneToOne(mappedBy = "contractOnHold", cascade = CascadeType.ALL,
    fetch = FetchType.LAZY, optional = false)
    private Employee employeeFuture;

    @OneToOne
    @JoinColumn(name = "was_for_id_employee")
    private Employee employeePast;

    public Contract() {
    }

    public Contract(Long id, String type, String startDate, String endDate, Grade grade, Double salaryFactor, Boolean isActive, Boolean isOnHold, Employee employee, Employee employeeFuture, Employee employeePast) {
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
        this.salaryFactor = salaryFactor;
        this.isActive = isActive;
        this.isOnHold = isOnHold;
        this.employee = employee;
        this.employeeFuture = employeeFuture;
        this.employeePast = employeePast;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }

    public Double getSalaryFactor() {
        return salaryFactor;
    }

    public void setSalaryFactor(Double salaryFactor) {
        this.salaryFactor = salaryFactor;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Boolean getOnHold() {
        return isOnHold;
    }

    public void setOnHold(Boolean onHold) {
        isOnHold = onHold;
    }

    public Employee getEmployeeFuture() {
        return employeeFuture;
    }

    public void setEmployeeFuture(Employee employeeFuture) {
        this.employeeFuture = employeeFuture;
    }

    public Employee getEmployeePast() {
        return employeePast;
    }

    public void setEmployeePast(Employee employeePast) {
        this.employeePast = employeePast;
    }

    @Override
    public String toString() {
        return "Contract{" +
                "Id=" + id +
                ", type='" + type + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", idGrade=" + grade +
                ", salaryFactor=" + salaryFactor +
                ", idEmployee=" + employee +
                '}';
    }
}
