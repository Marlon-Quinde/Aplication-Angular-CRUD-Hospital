import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioInterface } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:3080/api/Usuario/Get';

  constructor(private http:HttpClient) { }

  login(user:UsuarioInterface){
    return this.http.post(this.apiUrl, user);
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }
}
