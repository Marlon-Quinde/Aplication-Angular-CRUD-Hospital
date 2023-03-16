import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { ServiceService } from '../services/service.service';
import { ModificarClienteComponent } from '../modificar-cliente/modificar-cliente.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula','nombres', 'apellidos','direccion','edad','modificar','eliminar']
 
  data = [{
        cedula: '0151245245',      
        nombres: 'Andrés Luis',
        apellidos: 'Carvajal Lozano',
        direccion: 'Quito, Ecuador',
        edad: 50
      },
      {
        cedula: '0954658913',      
        nombres: 'Jorge Luis',
        apellidos: 'Charco Aguirre',
        direccion: 'Guayaquil, Ecuador',
        edad: 36
      },
      {
        cedula: '0957962158',      
        nombres: 'Andrea Lisbeth',
        apellidos: 'Romero Haro',
        direccion: 'Guayaquil, Ecuador',
        edad: 45
      }
    ];
  
  nuevoCliente:any;
  nav: any;
  modClient:any;
  termino:string = '';
  constructor(private router: Router, private dialog:MatDialog, private service:ServiceService) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoCliente = this.nav.extras.state;
  
    if (this.nuevoCliente != null)
    {      
      console.log(this.nuevoCliente.datosCliente.queryParams);
      this.data.push(this.nuevoCliente.datosCliente.queryParams);
    }
    
  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  openDialogAgregar(){
    this.dialog.open(AgregarClienteComponent, {
      width: '50%',
    })
  }
  modificarCliente(element:any,index:number){
    this.service.modClient = element;
    this.service.index = index;
    this.dialog.open(ModificarClienteComponent,{
      width: '50%',
    });
    
    
  }


  eliminarCliente(index:number){
    console.log(index);
    if(index>0){
      this.data.splice(index,index);
    }else{
      this.data.shift();
    }
    this.ngOnInit();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
