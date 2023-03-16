import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { DoctorInterface } from '../../interfaces/DoctorInterface';

@Component({
  selector: 'app-registrar-doctor',
  templateUrl: './registrar-doctor.component.html',
  styleUrls: ['./registrar-doctor.component.css']
})
export class RegistrarDoctorComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<RegistrarDoctorComponent>, private service:DoctorService) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  citaNueva = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    especialidad: new FormControl('', Validators.required),
    transaccion: new FormControl()
  })

  
  onSubmit()
  {
    this.citaNueva.value.transaccion = "INSERTAR_DOCTORES";
    let objToSend: NavigationExtras = {
      queryParams: {
        Cedula: this.citaNueva.value.cedula,
        Nombres: this.citaNueva.value.nombres,
        Apellidos: this.citaNueva.value.apellidos,
        Edad: this.citaNueva.value.edad,
        Especialidad: this.citaNueva.value.especialidad,
        Transaccion: this.citaNueva.value.transaccion
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.service.setDoctores(objToSend.queryParams as DoctorInterface).subscribe();
    this.redirectTo('/doctores');

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