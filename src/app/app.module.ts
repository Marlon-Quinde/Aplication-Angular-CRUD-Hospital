import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component'
import { ModificarClienteComponent } from './modificar-cliente/modificar-cliente.component';
import { CitasModule } from './citas/citas.module';
import { OpcionesComponent } from './opciones/opciones.component';
import { DoctorModule } from './doctor/doctor.module';
import {PacienteModule} from './paciente/paciente.module';
import { HistorialModule } from './historial/historial.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageInicialComponent,
    AgregarClienteComponent,
    ModificarClienteComponent,
    OpcionesComponent
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule, CitasModule, DoctorModule,
    HistorialModule,HttpClientModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
