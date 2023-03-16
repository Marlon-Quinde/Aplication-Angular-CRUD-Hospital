import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CitasInterface } from '../../interfaces/CitasInterface';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarDoctorComponent } from '../registrar-doctor/registrar-doctor.component';
import { ModificarDoctorComponent } from '../modificar-doctor/modificar-doctor.component';
import { DoctorService } from '../../services/doctor.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorInterface } from '../../interfaces/DoctorInterface';

@Component({
  selector: 'app-lista-doctor',
  templateUrl: './lista-doctor.component.html',
  styleUrls: ['./lista-doctor.component.css']
})
export class ListaDoctorComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['numeroCita','cedula','nombres', 'apellidos','edad','especialidad','modificar','eliminar']

  nuevoCliente:any;
  nav: any;
  modClient:any;
  termino:string = '';
  data:any;

  DoctorConsultar= new FormGroup({
    Transaccion: new FormControl()
  })
  constructor(private router: Router, private dialog:MatDialog, private service:DoctorService) { 
    
    //this.data = this.service.dataDoctor;
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.mostrarTodos()
  }

  mostrarTodos(){
    //this.PacienteConsultar.value.Cedula="0943792499";
    this.DoctorConsultar.value.Transaccion="MOSTRAR_DOCTORES"

    this.service.getDoctores(this.DoctorConsultar.value as DoctorInterface).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<DoctorInterface>(data as DoctorInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no Autorizado"),
    this.router.navigate(['/'])))
  }

  actualizarLista(){
    this.mostrarTodos()
  }

  openDialogAgregar(){
    this.dialog.open(RegistrarDoctorComponent, {
      width: '50%',
    })
  }

  modificarDoctor(doctor:DoctorInterface){
    // this.service.index = index;
    this.dialog.open(ModificarDoctorComponent,{
      width: '50%',
      data: { parametro: doctor }
    });
    
    
  }


  eliminarDoctor(doctor:DoctorInterface){
    doctor.Transaccion="BORRAR_DOCTORES"
    this.service.delDoctores(doctor).subscribe(() =>{
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


