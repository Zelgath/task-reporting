import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  private apiUrl : string = "http://localhost:8080/api/contracts";

  constructor(private http : HttpClient) { }

  getContracts() : Observable<Contract[]> {
    return this.http.get<Contract[]>(this.apiUrl);
}

  getContract(id : number) : Observable<Contract> {
    return this.http.get<Contract>(this.apiUrl + `/${id}`);
  } 

  addContract(data) : Observable<Contract> {
    return this.http.post<Contract>(this.apiUrl, data);
  }

  updateContract(id: number, data) : Observable<Contract> {
    return this.http.put<Contract>(this.apiUrl + `/${id}`, data);
  }

  deleteContract(id: number) : Observable<Contract> {
    return this.http.delete<Contract>(this.apiUrl + `/${id}`);
  }
}
