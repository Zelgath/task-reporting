import { Job } from './job';
import { Contract } from './contract';
import { Department } from './department';
import { Project } from './project';
import { Location } from './location';

export interface Employee {

    id : number;
    firstName : string;
    lastName : string;
    email : string;
    phoneNumber : string;
    job : Job;
    location : Location;
    contractActive : Contract;
    contractOnHold : Contract;
    idManager : number;
    department : Department;
    isManager : boolean;
    isOfficer : boolean;
    isActive : boolean;
    projects : Project[];
}