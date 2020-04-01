import { Injectable } from '@angular/core';
import { ProjectsAssigment } from '../models/projectsAssigment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsAssigmentService {

  private apiUrl : string = "http://localhost:8080/api/projectsAssigment";
  private apiUrlToDelete : string = "http://localhost:8080/api/deleteProjectsAssigment";

  constructor(private http : HttpClient) { }

  getProjectsAssigments() : Observable<ProjectsAssigment[]> {
    return this.http.get<ProjectsAssigment[]>(this.apiUrl);
}

  getProjectsAssigment(id : number) : Observable<ProjectsAssigment> {
    return this.http.get<ProjectsAssigment>(this.apiUrl + `/${id}`);
  } 

  addProjectsAssigment(data) : Observable<ProjectsAssigment> {
    return this.http.post<ProjectsAssigment>(this.apiUrl, data);
  }

  updateProjectsAssigment(id: number, data) : Observable<ProjectsAssigment> {
    return this.http.put<ProjectsAssigment>(this.apiUrl + `/${id}`, data);
  }

  deleteProjectsAssigment(id: number) : Observable<ProjectsAssigment> {
    return this.http.delete<ProjectsAssigment>(this.apiUrl + `/${id}`);
  }

  deleteProjectsAssigmentByFields(data) : Observable<ProjectsAssigment> {
    return this.http.post<ProjectsAssigment>(this.apiUrlToDelete, data);
  }
}
