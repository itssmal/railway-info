import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CONFIG } from '../../config'
import { Observable } from 'rxjs'
import { Passenger } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  public getAll = (): Observable<Array<Passenger>> => {
    return this.http.get<Array<Passenger>>(`${CONFIG.API}/passenger`)
  }

  public deleteElem =(id: number) => {
    return this.http.delete(`${CONFIG.API}/passenger/${id}`)
  }

}
