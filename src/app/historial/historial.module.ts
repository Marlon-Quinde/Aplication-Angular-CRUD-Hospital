import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListaHistorialComponent } from './lista-historial/lista-historial.component';
import { ModificarHistorialComponent } from './modificar-historial/modificar-historial.component';
import { RegistrarHistorialComponent } from './registrar-historial/registrar-historial.component';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListaHistorialComponent,
    ModificarHistorialComponent,
    RegistrarHistorialComponent
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
   ListaHistorialComponent,
    ModificarHistorialComponent,
    RegistrarHistorialComponent
  ]
})
export class HistorialModule { }
