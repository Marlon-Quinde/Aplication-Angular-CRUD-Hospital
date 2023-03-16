import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogData } from '../../interfaces/DialogDataInterface';
import { DoctorService } from '../../services/doctor.service';
import { DoctorInterface } from '../../interfaces/DoctorInterface';

@Component({
  selector: 'app-modificar-doctor',
  templateUrl: './modificar-doctor.component.html',
  styleUrls: ['./modificar-doctor.component.css']
})
export class ModificarDoctorComponent implements OnInit {

  @ViewChild('txtCedula') txtCedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtNombres') txtNombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtApellidos') txtApellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEdad') txtEdad!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEspecialidad') txtEspecialidad!: ElementRef<HTMLInputElement>;
  valor: boolean = false;
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarDoctorComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData ,private service: DoctorService) { }
  modDoctor= this.data.parametro;
  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  citaDoctor = new FormGroup({
    cedula: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    especialidad: new FormControl('', Validators.required)
  })


  onSubmit() {
    const Transaccion = "MODIFICAR_DOCTORES";
    let objToSend: NavigationExtras = {
      queryParams: {
        Id: this.modDoctor.id,
        cedula: this.txtCedula.nativeElement.value,
        nombres: this.txtNombres.nativeElement.value,
        apellidos: this.txtApellidos.nativeElement.value,
        edad: this.txtEdad.nativeElement.value,
        especialidad: this.txtEspecialidad.nativeElement.value,
        Transaccion : Transaccion
      },
      skipLocationChange: false,
      fragment: 'top'
    };
    this.service.updDoctores(objToSend.queryParams as DoctorInterface).subscribe();
    this.dialogRef.close();
    this.redirectTo('/doctores');

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  cancelar() {
    this.dialogRef.close();
  }

}
