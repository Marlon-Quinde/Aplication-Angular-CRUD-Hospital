import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PacienteInterface } from '../interfaces/PacienteInterface';
import { BehaviorSubject, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl: string = "http://localhost:3080/api/Hospital";

  updPaciente:any;
  
  constructor(private http: HttpClient) { }

  getPaciente_GET() {

  }

  getPacientes(Paciente: PacienteInterface) {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/GetPacientes`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post(url, Paciente, { headers: header });
  }

  setPacientes(Pacientes: PacienteInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/SetPacientes`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url, Pacientes, { headers: header });
  }

  delPacientes(Pacientes: PacienteInterface): Observable<void> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/DelPacientes`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<void>(url,Pacientes , { headers: header });
  }

  updPacientes(Pacientes: PacienteInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/UpdPacientes`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url,Pacientes , { headers: header });
  }


}
