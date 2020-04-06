package com.tasks.taskreporting.services;

import com.tasks.taskreporting.domain.Contract;
import com.tasks.taskreporting.repositories.ContractRepository;
import com.tasks.taskreporting.utils.DateFormatterForAngularMaterial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    @Autowired
    private DateFormatterForAngularMaterial dffam;

    public List<Contract> getAllContracts() {
        return contractRepository.findAll();
    }

    public Contract getContractById(Long contractId) throws ChangeSetPersister.NotFoundException {
        return contractRepository.findById(contractId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());
    }

    public Contract createContract(Contract contract) {
        contract.setStartDate(dffam.changeData(contract.getStartDate()));
        contract.setEndDate(dffam.changeData(contract.getEndDate()));
        return contractRepository.save(contract);
    }

    public Contract updateContract(Long contractId, Contract contractDetails) throws ChangeSetPersister.NotFoundException{
        Contract contract = contractRepository.findById(contractId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        contract.setType(contractDetails.getType());
        contract.setStartDate(dffam.changeData(contractDetails.getStartDate()));
        contract.setEndDate(dffam.changeData(contractDetails.getEndDate()));
        contract.setGrade(contractDetails.getGrade());
        contract.setSalaryFactor(contractDetails.getSalaryFactor());
        contract.setEmployee(contractDetails.getEmployee());
        contract.setEmployeeFuture(contractDetails.getEmployeeFuture());
        contract.setActive(contractDetails.getActive());
        contract.setOnHold(contractDetails.getOnHold());
        final Contract updatedContract = contractRepository.save(contract);
        return updatedContract;
    }

    public Map<String, Boolean> deleteContract(Long contractId) throws Exception {
        Contract contract = contractRepository.findById(contractId).orElseThrow(()-> new ChangeSetPersister.NotFoundException());

        contractRepository.delete(contract);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
