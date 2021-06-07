import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/interfaces'
import { HttpClient } from '@angular/common/http'
import { CONFIG } from '../../config'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployeeList = (): Observable<Array<Employee>> => {
    return this.http.get<Array<Employee>>(`${CONFIG.API}/employee`)
  }

  public getEmployeeById = (id: string): Observable<Employee> => {
    return this.http.get<Employee>(`${CONFIG.API}/employee/${id}`)
  }

}
