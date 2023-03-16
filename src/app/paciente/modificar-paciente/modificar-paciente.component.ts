import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';
import { observable } from 'rxjs';
import { PacienteInterface } from '../../interfaces/PacienteInterface';
import { DialogData } from '../../interfaces/DialogDataInterface';

@Component({
  selector: 'app-modificar-paciente',
  templateUrl: './modificar-paciente.component.html',
  styleUrls: ['./modificar-paciente.component.css']
})
export class ModificarPacienteComponent implements OnInit {

  @ViewChild('txtCedula') txtCedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtNombres') txtNombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtApellidos') txtApellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEdad') txtEdad!: ElementRef<HTMLInputElement>;
  
  valor: boolean = false;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogData , private dialogRef: MatDialogRef<ModificarPacienteComponent> , private service: PacienteService) { }
  
  modPaciente = this.data.parametro;

  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  modificarPaciente = new FormGroup({
    Cedula: new FormControl('', Validators.required),
    Nombres: new FormControl('', Validators.required),
    Apellidos: new FormControl('', Validators.required),
    Edad: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })


  onSubmit() {
    const Transaccion = "MODIFICAR_PACIENTES";
    let objToSend: NavigationExtras = {
      queryParams: {
        Id: this.modPaciente.id,
        Cedula: this.txtCedula.nativeElement.value,
        Nombres: this.txtNombres.nativeElement.value,
        Apellidos: this.txtApellidos.nativeElement.value,
        Edad: this.txtEdad.nativeElement.value,
        Transaccion : Transaccion

      },
      skipLocationChange: false,
      fragment: 'top'
    };
    this.service.updPacientes(objToSend.queryParams as PacienteInterface).subscribe();
    this.dialogRef.close();
    this.redirectTo('/pacientes');

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  cancelar() {
    this.dialogRef.close();
  }

}
