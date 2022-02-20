import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable } from "rxjs";
import { Employee}   from "./employee";



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8089/api/v1/employees";
  constructor(private httpClient: HttpClient) { }
  getAll(params: any): Observable<any> {
    return this.httpClient.get<any>(this.baseURL, { params });
  }

  getEmployeelist(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee:Employee): Observable<object>{
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee );

  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}