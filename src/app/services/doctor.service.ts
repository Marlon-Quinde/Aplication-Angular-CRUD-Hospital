import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorInterface } from '../interfaces/DoctorInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiUrl: string = "http://localhost:3080/api/Hospital";

  updDoctor:any;
  constructor(private http:HttpClient) { }

  getDoctores(Doctores: DoctorInterface){
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/GetDoctores`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}` 
    })
    return this.http.post(url, Doctores, {headers:header});
  }

  setDoctores(Doctores: DoctorInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/SetDoctores`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url, Doctores, { headers: header });
  }

  delDoctores(Doctores: DoctorInterface): Observable<void> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/DelDoctores`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<void>(url,Doctores , { headers: header });
  }

  updDoctores(Doctores: DoctorInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/UpdDoctores`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url,Doctores , { headers: header });
  }

}
