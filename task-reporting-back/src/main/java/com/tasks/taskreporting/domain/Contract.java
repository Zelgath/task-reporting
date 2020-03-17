package com.tasks.taskreporting.domain;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name = "contracts")
@EntityListeners(AuditingEntityListener.class)
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
    @Column(name = "id_employee")
    private Long idEmployee;

    public Contract() {
    }

    public Contract(Long id, String type, String startDate, String endDate, Long idGrade, Double salaryFactor, Long idEmployee) {
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.idGrade = idGrade;
        this.salaryFactor = salaryFactor;
        this.idEmployee = idEmployee;
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

    public Long getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(Long idEmployee) {
        this.idEmployee = idEmployee;
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
                ", idEmployee=" + idEmployee +
                '}';
    }
}
