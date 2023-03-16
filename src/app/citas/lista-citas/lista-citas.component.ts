import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { CitasInterface } from '../../interfaces/CitasInterface';
import { MatTableDataSource } from '@angular/material/table';
import { AgendarCitasComponent } from '../agendar-citas/agendar-citas.component';
import { ModificarCitasComponent } from '../modificar-citas/modificar-citas.component';
import { CitaService } from '../../services/cita.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['numeroCita','cedula','nombres', 'apellidos','edad','nombreDoctor','fecha','modificar','eliminar']

  nuevoCliente:any;
  nav: any;
  modClient:any;
  termino:string = '';
  data:any;

  CitasConsultar = new FormGroup({
    Transaccion: new FormControl()
  })
  constructor(private router: Router, private dialog:MatDialog, private service:CitaService) { 
    
    
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
    this.CitasConsultar.value.Transaccion="MOSTRAR_CITAS"

    this.service.getCitas(this.CitasConsultar.value as CitasInterface).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<CitasInterface>(data as CitasInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no Autorizado"),
    this.router.navigate(['/'])))
  }

  actualizarLista(){
    this.mostrarTodos()
  }
  openDialogAgregar(){
    this.dialog.open(AgendarCitasComponent, {
      width: '50%',
    })
  }

  atras(){
    this.router.navigate(['/opciones']);
  }

  modificarCita(cita:CitasInterface){
    
    // this.service.index = index;
    this.dialog.open(ModificarCitasComponent,{
      width: '50%',
      data: { parametro: cita }
    });
    
    
  }

  
  
  eliminarCita(cita:CitasInterface){
    cita.Transaccion="BORRAR_CITAS"
    this.service.delCitas(cita).subscribe(() =>{
      this.mostrarTodos()
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


