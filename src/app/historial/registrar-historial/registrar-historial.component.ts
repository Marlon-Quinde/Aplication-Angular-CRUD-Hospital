import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HistorialService } from '../../services/historial.service';
import { HistorialInterface } from '../../interfaces/HistorialInterface';

@Component({
  selector: 'app-registrar-historial',
  templateUrl: './registrar-historial.component.html',
  styleUrls: ['./registrar-historial.component.css']
})
export class RegistrarHistorialComponent implements OnInit {

    constructor(private router: Router, private dialogRef: MatDialogRef<RegistrarHistorialComponent>, private service:HistorialService) { }
  
    ngOnInit(): void {
    }

    HistorialNuevo = new FormGroup({
      cedula: new FormControl('',Validators.required),
      paciente: new FormControl('',Validators.required),
      diagnostico: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      doctor: new FormControl('', Validators.required),
      transaccion: new FormControl()
    })
  
    
    onSubmit()
    {
      this.HistorialNuevo.value.transaccion = "INSERTAR_HISTORIAL";
      let objToSend: NavigationExtras = {
        queryParams: {
          Cedula: this.HistorialNuevo.value.cedula,
          Paciente: this.HistorialNuevo.value.paciente,
          Diagnostico: this.HistorialNuevo.value.diagnostico,
          Fecha: this.HistorialNuevo.value.fecha,
          Doctor: this.HistorialNuevo.value.doctor,
          Transaccion: this.HistorialNuevo.value.transaccion
        },
        skipLocationChange: false,
        fragment: 'top' 
      };
  
      this.dialogRef.close(); 
      this.service.setHistorial(objToSend.queryParams as HistorialInterface).subscribe();
      this.redirectTo('/historial');
  
    }
  
    redirectTo(uri:string){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([uri]));
    }
  
    cancelar()
    {
      this.dialogRef.close(); 
    }
}