import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HistorialInterface } from '../interfaces/HistorialInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private apiUrl: string = "http://localhost:3080/api/Hospital";

  updPaciente:any;
  
  constructor(private http: HttpClient) { }

  getPaciente_GET() {

  }

  getHistorial(Historial: HistorialInterface) {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/GetHistorial`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post(url, Historial, { headers: header });
  }

  setHistorial(Historial: HistorialInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/SetHistorial`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url, Historial, { headers: header });
  }

  delHistorial(Historial: HistorialInterface): Observable<void> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/DelHistorial`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<void>(url,Historial , { headers: header });
  }

  updHistorial(Historial: HistorialInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/UpdHistorial`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url,Historial , { headers: header });
  }

}
