import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl : string = "http://localhost:8080/api/projects";

  constructor(private http : HttpClient) { }

  getProjects() : Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
}
}
