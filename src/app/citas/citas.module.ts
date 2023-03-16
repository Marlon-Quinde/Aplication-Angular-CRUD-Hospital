import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { ModificarCitasComponent } from './modificar-citas/modificar-citas.component';


import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AgendarCitasComponent,
    ListaCitasComponent,
    ModificarCitasComponent
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
    AgendarCitasComponent,
    ListaCitasComponent,
    ModificarCitasComponent
  ]
})
export class CitasModule { }
