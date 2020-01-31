import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Employee } from './models/employee';
  

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  private apiUrl : string = "";


  constructor(private http : HttpClient) { }

  getCars() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
}

}
