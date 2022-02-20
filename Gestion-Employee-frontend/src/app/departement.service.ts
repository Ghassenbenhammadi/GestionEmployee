import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "./departement";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private baseURL="http://localhost:8089/api/v1/departement";
  constructor(private  httpClient : HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.httpClient.get<any>(this.baseURL, { params });
  }

  getDeplist(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseURL}`);
  }
  createDepartement(dep:Departement): Observable<object>{
    return this.httpClient.post<Departement>(`${this.baseURL}`, dep );

  }
  getDepartementById(id: number): Observable<Departement>{
    return this.httpClient.get<Departement>(`${this.baseURL}/${id}`);
  }

  updateDepartement(id: number, dep: Departement): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, dep);
  }

  deleteDepartement(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
