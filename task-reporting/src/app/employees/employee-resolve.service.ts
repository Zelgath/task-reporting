import { EmployeesService } from './employees.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Employee } from '../models/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeResolve implements Resolve<Employee>{
    constructor(private employeesService : EmployeesService) {}

    resolve(route : ActivatedRouteSnapshot) {
        return this.employeesService.getEmployee(route.params['id']);
    };

}