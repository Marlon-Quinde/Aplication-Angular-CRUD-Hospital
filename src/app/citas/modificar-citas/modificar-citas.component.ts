import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CitaService } from '../../services/cita.service';
import { DialogData } from '../../interfaces/DialogDataInterface';
import { CitasInterface } from '../../interfaces/CitasInterface';

@Component({
  selector: 'app-modificar-citas',
  templateUrl: './modificar-citas.component.html',
  styleUrls: ['./modificar-citas.component.css']
})
export class ModificarCitasComponent implements OnInit {

  @ViewChild('txtCedula') txtCedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtNombres') txtNombres!: ElementRef<HTMLInputElement>;
  @ViewChild('txtApellidos') txtApellidos!: ElementRef<HTMLInputElement>;
  @ViewChild('txtEdad') txtEdad!: ElementRef<HTMLInputElement>;
  @ViewChild('txtNombreDoctor') txtNombreDoctor!: ElementRef<HTMLInputElement>;
  @ViewChild('txtFecha') txtFecha!: ElementRef<HTMLInputElement>;
  valor: boolean = false;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogData , private dialogRef: MatDialogRef<ModificarCitasComponent>, private service: CitaService) { }
  modCita = this.data.parametro;
  ngOnInit(): void {
  }

  //navigationExtras: NavigationExtras={};

  citaNueva = new FormGroup({
    Cedula: new FormControl('', Validators.required),
    Nombres: new FormControl('', Validators.required),
    Apellidos: new FormControl('', Validators.required),
    Edad: new FormControl('', Validators.required),
    NombreDoctor: new FormControl('', Validators.required),
    Fecha: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })


  onSubmit() {
    const Transaccion = "MODIFICAR_CITAS";
    let objToSend: NavigationExtras = {
      queryParams: {
        Id: this.modCita.id,
        Cedula: this.txtCedula.nativeElement.value,
        Nombres: this.txtNombres.nativeElement.value,
        Apellidos: this.txtApellidos.nativeElement.value,
        Edad: this.txtEdad.nativeElement.value,
        Doctor: this.txtNombreDoctor.nativeElement.value,
        Fecha: this.txtFecha.nativeElement.value,
        Transaccion: Transaccion

      },
      skipLocationChange: false,
      fragment: 'top'
    };
    this.service.updCitas(objToSend.queryParams as CitasInterface).subscribe();
    this.dialogRef.close();
    this.redirectTo('/citas');

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  cancelar() {
    this.dialogRef.close();
  }

}
