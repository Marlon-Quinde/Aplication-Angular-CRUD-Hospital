import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  estadoSession: boolean = false;
  usuarioSession: string = '';
  estadoButton: boolean = true;

  usuario: any = [
    {
      user: 'Marlon',
      password: '124'
    },
    {
      user: 'Luisa',
      password: '1214'
    },
    {
      user: 'Kevin',
      password: '2222'
    },
    {
      user: 'Belen',
      password: '1224'
    },

  ];
  constructor() { }

  validarSesion(estado:boolean, usuario:string){
    this.estadoSession = estado;
    this.usuarioSession = usuario;
    this.estadoButton = false;
  }
}
