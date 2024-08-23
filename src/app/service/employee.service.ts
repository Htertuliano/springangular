import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseURL = "http://localhost:8080";


  createEmployee(employee: Employee){
    return this.http.post(this.baseURL+ "/employees", employee)
  }

  updateEmployee(employee: Employee){
    return this.http.post(this.baseURL + "/employees", employee)
  }

  getEmployeeList(){
    return this.http.get(this.baseURL)
  }

  getEmployee(id: number | undefined){
    return this.http.get(this.baseURL + "/employees" + id)
  }

  deleteEmployee(id: any){
    return this.http.delete(this.baseURL + "/employees" + "/id")
  }
  

   
}
