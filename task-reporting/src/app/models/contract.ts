import { Grade } from './grade';

export interface Contract {
    id : number;
    type : string;
    startDate : string;
    endDate : string;
    grade : Grade;
    salaryFactor : number;
    active : boolean;
    onHold: boolean;
}