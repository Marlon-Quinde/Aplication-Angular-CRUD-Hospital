import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  @ViewChild('txtCedula') txtCedula!:ElementRef<HTMLInputElement>;
  @ViewChild('txtNombres') txtNombres!:ElementRef<HTMLInputElement>;
  @ViewChild('txtApellidos') txtApellidos!:ElementRef<HTMLInputElement>;
  @ViewChild('txtDireccion') txtDireccion!:ElementRef<HTMLInputElement>;
  @ViewChild('txtEdad') txtEdad!:ElementRef<HTMLInputElement>;
  valor:boolean =false;
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarClienteComponent>, private service:ServiceService) { }
  modClient = this.service.modClient;
  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  usuarioNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required)
  })

  
  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.txtCedula.nativeElement.value,
        nombres: this.txtNombres.nativeElement.value,
        apellidos: this.txtApellidos.nativeElement.value,
        direccion: this.txtDireccion.nativeElement.value,
        edad: this.txtEdad.nativeElement.value
        
      },
      skipLocationChange: false,
      fragment: 'top' 
    };
    this.service.valor = true;
    this.dialogRef.close(); 
    this.redirectTo('/cliente', objToSend);
    
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosCliente: objToSend}}));
  }

  cancelar()
  {
    this.service.valor = false;
    this.dialogRef.close(); 
  }

}
