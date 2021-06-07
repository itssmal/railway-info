import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Locomotive } from '../interfaces/interfaces'
import { CONFIG } from '../../config'
import { map, tap } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class LocomotiveService {

    constructor(private http: HttpClient) {
    }

    public getAll = (): Observable<Array<Locomotive>> => {
        return this.http.get<Array<Locomotive>>(`${CONFIG.API}/locomotive`)
    }

    public getRepair = (): Observable<any> => {
        return this.http.get(`${CONFIG.API}/repair`)
    }

    public getPreparation = (): Observable<any> => {
        return this.http.get(`${CONFIG.API}/preparation`)
    }

    public getLocomotiveById = (id: number): Observable<any> => {
        let repair
        let prepare

        this.getRepair().toPromise().then(res => repair = res.find(el => el.locomotiveId.id == id))
        this.getPreparation().toPromise().then(res => prepare = res.find(el => el.locomotiveId.id == id))

        return this.http.get<any>(`${CONFIG.API}/locomotive/${id}`)
            .pipe(
                map(res => {
                    return {...res, repair, prepare}
                })
            )
    }

}
