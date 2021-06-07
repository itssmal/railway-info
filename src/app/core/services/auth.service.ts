import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CONFIG } from '../../config'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token = null

  constructor(private http: HttpClient) { }

  public login = (username: string, password: string): Observable<any> => {
    return this.http.post(`${CONFIG.API}/auth/login`, JSON.stringify({email: username, password}), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).pipe(
            tap(
                ({token}) => {
                  localStorage.setItem('auth-token', token)
                  this.setToken(token)
                }
            )
        )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return localStorage.getItem('auth-token')
  }

}
