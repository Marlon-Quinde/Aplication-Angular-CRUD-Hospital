import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { HistorialInterface } from 'src/app/interfaces/HistorialInterface';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrarHistorialComponent } from '../registrar-historial/registrar-historial.component';
import { ModificarHistorialComponent } from '../modificar-historial/modificar-historial.component';
import { FormGroup, FormControl } from '@angular/forms';
import { HistorialService } from '../../services/historial.service';

@Component({
    selector: 'app-lista-historial',
    templateUrl: './lista-historial.component.html',
    styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['numeroCita','cedula','nombres', 'apellidos','edad','especialidad','modificar','eliminar']

  nuevoCliente:any;
  nav: any;
  modClient:any;
  termino:string = '';
  data:any;

  HistorialConsultar = new FormGroup({
    Transaccion: new FormControl()
  })
  constructor(private router: Router, private dialog:MatDialog, private service:HistorialService) { 
    
    
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
    this.HistorialConsultar.value.Transaccion="MOSTRAR_HISTORIAL"

    this.service.getHistorial(this.HistorialConsultar.value as HistorialInterface).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<HistorialInterface>(data as HistorialInterface[]);
      console.log(data);
    },
    (errorData) => (alert("Usuario no Autorizado"),
    this.router.navigate(['/'])))
  }
   actualizarLista(){
    this.mostrarTodos()
   }
  
  openDialogAgregar(){
    this.dialog.open(RegistrarHistorialComponent,{
      width: '50%',
    })
  }

  atras(){
    this.router.navigate(['/opciones']);
  }
  
  modificarHistorial(historial:HistorialInterface){
    
    // this.service.index = index;
    this.dialog.open(ModificarHistorialComponent,{
      width: '50%',
      data: { parametro: historial }
    });
    
    
  }

  
  
  eliminarHistorial(historial:HistorialInterface){
    historial.Transaccion="BORRAR_HISTORIAL"
    this.service.delHistorial(historial).subscribe(() =>{
      this.mostrarTodos()
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
