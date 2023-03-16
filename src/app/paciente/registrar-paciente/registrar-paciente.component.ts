import { Component,OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { PacienteInterface } from '../../interfaces/PacienteInterface';


@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<RegistrarPacienteComponent>, private service:PacienteService) { }

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  nuevoPaciente = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    transaccion: new FormControl()
    
  })

  
  onSubmit()
  {
    this.nuevoPaciente.value.transaccion = "INSERTAR_PACIENTES";
    let objToSend: NavigationExtras = {
      queryParams: {
        Cedula: this.nuevoPaciente.value.cedula,
        Nombres: this.nuevoPaciente.value.nombres,
        Apellidos: this.nuevoPaciente.value.apellidos,
        Edad: this.nuevoPaciente.value.edad,
        Transaccion: this.nuevoPaciente.value.transaccion
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.service.setPacientes(objToSend.queryParams as PacienteInterface).subscribe();
    this.redirectTo('/pacientes');

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