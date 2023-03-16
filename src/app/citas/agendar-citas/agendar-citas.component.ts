import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CitaService } from '../../services/cita.service';
import { CitasInterface } from '../../interfaces/CitasInterface';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<AgendarCitasComponent>,private service:CitaService) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  citaNueva = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    doctor: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    transaccion: new FormControl()
  })

  
  onSubmit()
  {
    this.citaNueva.value.transaccion = "INSERTAR_CITAS";
    let objToSend: NavigationExtras = {
      queryParams: {
        Cedula: this.citaNueva.value.cedula,
        Nombres: this.citaNueva.value.nombres,
        Apellidos: this.citaNueva.value.apellidos,
        Edad: this.citaNueva.value.edad,
        Doctor: this.citaNueva.value.doctor,
        Fecha: this.citaNueva.value.fecha,
        Transaccion: this.citaNueva.value.transaccion
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.service.setCitas(objToSend.queryParams as CitasInterface).subscribe();
    this.redirectTo('/citas');

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