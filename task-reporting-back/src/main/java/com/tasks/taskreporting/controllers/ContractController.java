package com.tasks.taskreporting.controllers;

import com.tasks.taskreporting.domain.Contract;
import com.tasks.taskreporting.services.ContractService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ContractController {

    @Autowired
    private ContractService contractService;

    @GetMapping("/contracts")
    public List<Contract> getAllContracts() {
        return contractService.getAllContracts();
    }

    @GetMapping("/contracts/{id}")
    public ResponseEntity<Contract> getContractById(@PathVariable(value = "id") Long contractId) throws ChangeSetPersister.NotFoundException {
        Contract contract = contractService.getContractById(contractId);
        return ResponseEntity.ok().body(contract);
    }

    @PostMapping("/contracts")
    public Contract createContract(@Valid @RequestBody Contract contract) {
        return contractService.createContract(contract);
    }

    @PutMapping("/contracts/{id}")
    public ResponseEntity<Contract> updateContract(@PathVariable(value = "id") Long contractId, @Valid @RequestBody Contract contractDetails) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(contractService.updateContract(contractId, contractDetails));
    }

    @DeleteMapping("/contracts/{id}")
    public Map<String, Boolean> deleteContract(@PathVariable(value = "id") Long contractId) throws Exception {
        return contractService.deleteContract(contractId);
    }
}
