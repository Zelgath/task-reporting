import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Employee } from '../models/employee';
  

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  private apiUrl : string = "http://localhost:8080/api/employees";


  constructor(private http : HttpClient) { }

   getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
}
  getEmployee(id : number) : Observable<Employee> {
  return this.http.get<Employee>(this.apiUrl + `/${id}`);
}

  addEmployee(data) : Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, data);
  }

  updateEmployee(id: number, data) : Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + `/${id}`, data);
  }

}