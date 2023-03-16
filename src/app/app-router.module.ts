import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes/clientes.component";
import { LoginComponent } from "./login/login.component";
import { PageInicialComponent } from "./page-inicial/page-inicial.component";
import { ListaCitasComponent } from './citas/lista-citas/lista-citas.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { ListaDoctorComponent } from './doctor/lista-doctor/lista-doctor.component';
import { ListaPacienteComponent } from './paciente/lista-paciente/lista-paciente.component';
import { ListaHistorialComponent } from "./historial/lista-historial/lista-historial.component";

//route
const routes:Routes=[
    {path:'',component:PageInicialComponent,pathMatch:'full'},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'opciones',component:OpcionesComponent},
    {path:'citas',component:ListaCitasComponent},
    {path:'doctores',component:ListaDoctorComponent},
    {path:'cliente',component:ClientesComponent},
    {path:'pacientes', component:ListaPacienteComponent},
    {path:'sesion', component:LoginComponent},
    {path:'historial',component:ListaHistorialComponent},
    

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}