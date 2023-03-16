import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarPacienteComponent } from '../registrar-paciente/registrar-paciente.component';
import { ModificarPacienteComponent } from '../modificar-paciente/modificar-paciente.component';
import { PacienteService } from '../../services/paciente.service';
import { FormGroup, FormControl } from '@angular/forms';
import { PacienteInterface } from '../../interfaces/PacienteInterface';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['numeroCita','cedula','nombres', 'apellidos','edad','modificar','eliminar']

  nuevoCliente:any;
  nav: any;
  modClient:any;
  termino:string = '';
  data:any;

  PacienteConsultar = new FormGroup({
    Cedula: new FormControl(),
    Transaccion: new FormControl()
  })
  constructor(private router: Router, private dialog:MatDialog, private service:PacienteService) { 
    
    //this.data = this.service.dataPaciente;
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    //this.PacienteConsultar.value.Cedula="0943792499";
    this.PacienteConsultar.value.Transaccion="MOSTRAR_PACIENTES"

    this.service.getPacientes(this.PacienteConsultar.value as PacienteInterface).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<PacienteInterface>(data as PacienteInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no Autorizado"),
    this.router.navigate(['/'])))
  }

  actualizarLista(){
    this.mostrarTodos()
  }

  openDialogAgregar(){
    this.dialog.open(RegistrarPacienteComponent, {
      width: '50%',
    })
    
  }

  modificarPaciente(paciente:PacienteInterface){
    
    // this.service.index = index;
    this.dialog.open(ModificarPacienteComponent,{
      width: '50%',
      data: { parametro: paciente }
    });
    
  }
  
  eliminarPaciente(paciente:PacienteInterface){
    paciente.Transaccion="BORRAR_PACIENTES"
    this.service.delPacientes(paciente).subscribe(() =>{
      this.mostrarTodos()
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  atras(){
    this.router.navigate(['/opciones']);
  }
}

