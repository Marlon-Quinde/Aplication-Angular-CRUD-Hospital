import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctores } from '../interfaces/hospital.interface';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private apiUrl: string = 'https://localhost:7098/swagger/index.html';

  get httpParams(){
    return new HttpParams()
  }

  constructor(private http:HttpClient) { }

  mostrarDoctores(termino: string): Observable<Doctores[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Doctores[]>(url,{params: this.httpParams});
  }
  
}
