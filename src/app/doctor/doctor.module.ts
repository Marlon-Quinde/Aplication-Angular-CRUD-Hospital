import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ListaDoctorComponent } from './lista-doctor/lista-doctor.component';
import { ModificarDoctorComponent } from './modificar-doctor/modificar-doctor.component';
import { RegistrarDoctorComponent } from './registrar-doctor/registrar-doctor.component';


import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListaDoctorComponent,
    ModificarDoctorComponent,
    RegistrarDoctorComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],exports: [
    ListaDoctorComponent,
    ModificarDoctorComponent,
    RegistrarDoctorComponent
  ]
})
export class DoctorModule { }
