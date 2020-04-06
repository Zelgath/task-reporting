import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private apiUrl : string = "http://localhost:8080/api/grades";

  constructor(private http : HttpClient) { }

  getGrades() : Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
}

  getGrade(id : number) : Observable<Grade> {
    return this.http.get<Grade>(this.apiUrl + `/${id}`);
  } 

  addGrade(data) : Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, data);
  }

  updateGrade(id: number, data) : Observable<Grade> {
    return this.http.put<Grade>(this.apiUrl + `/${id}`, data);
  }

  deleteGrade(id: number) : Observable<Grade> {
    return this.http.delete<Grade>(this.apiUrl + `/${id}`);
  }
}
