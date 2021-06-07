import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CONFIG } from '../../config'
import { Observable } from 'rxjs'
import { Schedule } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {

  public body = {
    "id": 6,
    "departureDay": "Saturday",
    "arrivalDay": "Monday",
    "departureDate": "2021-05-03T21:00:00.000+00:00",
    "arrivalDate": "2021-05-02T21:00:00.000+00:00",
    "routeId": {
      "id": 5,
      "race": "DOMESTIC",
      "initialDestination": "Chernivtsi",
      "finalDestination": "Odessa",
      "mainStations": "Chernivtsi-Lviv-Vinitsia-Odessa"
    },
    "locomotiveId": {
      "id": 5,
      "numberWagons": 6,
      "type": "PASSENGERS",
      "condition": "READY"
    }
  }

  constructor(private http: HttpClient) { }

  public getScheduleList = (): Observable<Array<Schedule>> => {
    return this.http.get<Array<Schedule>>(`${CONFIG.API}/schedule`)
  }

  public deleteElem = (id: number) => {
    return this.http.delete(`${CONFIG.API}/schedule/${id}`)
  }

  public addItem = (values?: any) => {
    return this.http.post(`${CONFIG.API}/schedule`, JSON.stringify(values))
  }

}
