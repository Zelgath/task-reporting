import { Grade } from './grade';
import { Employee } from './employee';

export interface Contract {
    id : number;
    type : string;
    startDate : string;
    endDate : string;
    grade : Grade;
    salaryFactor : number;
    active : boolean;
    onHold: boolean;
    employee: Employee;
    employeeFuture: Employee;
}