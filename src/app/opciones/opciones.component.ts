import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../services/sesion.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

  constructor(private router:Router, private session: SesionService) { }
  sesion = localStorage.getItem('userName');
  ngOnInit(): void {
  }

  cambiarCita(){
    this.router.navigate(['/citas']);
  }
  cambiarDoctor(){
    this.router.navigate(['/doctores']);

  }

  cambiarPaciente(){
    this.router.navigate(['/pacientes']);
  }

  cambiarHistorial(){
    this.router.navigate(['/historial']);
  }

  salir(){
    this.router.navigate(['/pageInicial']);
  }

}
