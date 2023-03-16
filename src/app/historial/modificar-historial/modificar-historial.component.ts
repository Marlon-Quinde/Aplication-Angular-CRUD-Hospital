import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../../services/service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogData } from '../../interfaces/DialogDataInterface';
import { HistorialService } from '../../services/historial.service';
import { HistorialInterface } from '../../interfaces/HistorialInterface';

@Component({
  selector: 'app-historial-historial',
  templateUrl: './modificar-historial.component.html',
  styleUrls: ['./modificar-historial.component.css']
})
export class ModificarHistorialComponent implements OnInit {

  @ViewChild('txtCedula') txtCedula!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPaciente') txtPaciente!: ElementRef<HTMLInputElement>;
  @ViewChild('txtDiagnostico') txtDiagnostico!: ElementRef<HTMLInputElement>;
  @ViewChild('txtFecha') txtFecha!: ElementRef<HTMLInputElement>;
  @ViewChild('txtDoctor') txtDoctor!: ElementRef<HTMLInputElement>;
  valor: boolean = false;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogData ,private dialogRef: MatDialogRef<ModificarHistorialComponent>, private service:HistorialService) { }
  modHistorial= this.data.parametro;
  ngOnInit(): void {
  }

  modificarHistorial = new FormGroup({
    Cedula: new FormControl('',Validators.required),
    Paciente: new FormControl('',Validators.required),
    Diagnostico: new FormControl('', Validators.required),
    Fecha: new FormControl('', Validators.required),
    Doctor: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })

  onSubmit() {
    const Transaccion = "MODIFICAR_HISTORIAL"
    let objToSend: NavigationExtras = {
      queryParams: {
        Id: this.modHistorial.id,
        Cedula: this.txtCedula.nativeElement.value,
        Paciente: this.txtPaciente.nativeElement.value,
        Diagnostico: this.txtDiagnostico.nativeElement.value,
        Fecha: this.txtFecha.nativeElement.value,
        Doctor: this.txtDoctor.nativeElement.value,
        Transaccion: Transaccion
      },
      skipLocationChange: false,
      fragment: 'top'
    };
    this.dialogRef.close();
    this.service.updHistorial(objToSend.queryParams as HistorialInterface).subscribe();
    this.redirectTo('/historial');

  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }

  cancelar() {
    this.dialogRef.close();
  }
}