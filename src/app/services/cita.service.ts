import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CitasInterface } from '../interfaces/CitasInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl: string = "http://localhost:3080/api/Hospital";

  updPaciente:any;
  
  constructor(private http: HttpClient) { }

  getPaciente_GET() {

  }

  getCitas(Cita: CitasInterface) {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/GetCitas`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post(url, Cita, { headers: header });
  }

  setCitas(Citas: CitasInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/SetCitas`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url, Citas, { headers: header });
  }

  delCitas(Citas: CitasInterface): Observable<void> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/DelCitas`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<void>(url,Citas , { headers: header });
  }

  updCitas(Citas: CitasInterface): Observable<any> {
    let auth_token = localStorage.getItem('token_value');
    const url = `${this.apiUrl}/UpdCitas`;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    return this.http.post<any>(url,Citas , { headers: header });
  }

}
