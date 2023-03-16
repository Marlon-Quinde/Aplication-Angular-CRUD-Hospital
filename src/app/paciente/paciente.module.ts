import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { ModificarPacienteComponent } from './modificar-paciente/modificar-paciente.component';
import { RegistrarPacienteComponent } from './registrar-paciente/registrar-paciente.component';


import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    ListaPacienteComponent,
    ModificarPacienteComponent,
    RegistrarPacienteComponent
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
    ListaPacienteComponent,
    ModificarPacienteComponent,
    RegistrarPacienteComponent
  ]
})
export class PacienteModule { }
