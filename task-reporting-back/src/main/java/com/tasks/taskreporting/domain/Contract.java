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
    @Column(name = "id_grade")
    private Long idGrade;

    @Column(name = "contract_salary_factor")
    private Double salaryFactor;

    @OneToOne(mappedBy = "contractActive", cascade = CascadeType.ALL,
    fetch = FetchType.LAZY, optional = false)
    private Employee employee;

    public Contract() {
    }

    public Contract(Long id, String type, String startDate, String endDate, Long idGrade, Double salaryFactor, Employee employee) {
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.idGrade = idGrade;
        this.salaryFactor = salaryFactor;
        this.employee = employee;
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

    public Long getIdGrade() {
        return idGrade;
    }

    public void setIdGrade(Long idGrade) {
        this.idGrade = idGrade;
    }

    public Double getSalaryFactor() {
        return salaryFactor;
    }

    public void setSalaryFactor(Double salaryFactor) {
        this.salaryFactor = salaryFactor;
    }

    @JsonIgnore
    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Contract{" +
                "Id=" + id +
                ", type='" + type + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", idGrade=" + idGrade +
                ", salaryFactor=" + salaryFactor +
                ", idEmployee=" + employee +
                '}';
    }
}
