import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core';
import { CitasInterface } from '../interfaces/CitasInterface';
import { DoctorInterface } from '../interfaces/DoctorInterface';
import { PacienteInterface } from '../interfaces/PacienteInterface';
import { HistorialInterface } from '../interfaces/HistorialInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  modClient:any;
  index:number = 0;
  valor:boolean = false;
  login:string = 'Iniciar Sesion'

  modCita:any = {
    cedula: '',
    nombres: '',
    apellidos: '',
    edad: 0,
    nombreDoctor: '',
    fecha: ''
  };

  modDoctor:any = {
    cedula: '',
    nombres: '',
    apellidos: '',
    especialidad: '',
    edad: 0
  };

  modPaciente: any ={
     cedula: '',
     nombres: '',
     apellidos: '',
     edad:0

  };

  modHistorial:any={
    cedula: '',
    nombres: '',
    apellidos: '',
    especialidad: '',
    edad: ''
  };

  constructor() { }

  dataCitas:any = [{
    cedula: '0943792499',
    nombres: 'Marlon Rodolfo',
    apellidos: 'Quinde Cordova',
    edad: 22,
    nombreDoctor: 'Dc. Perez',
    fecha: '16/01/2023'
  },
  {
    cedula: '0987654321',
    nombres: 'Maria Belen',
    apellidos: 'Alejandro Ambi',
    edad: 20,
    nombreDoctor: 'Dc. Raul',
    fecha: '29/01/2023'
  },
  {
    cedula: '0999999999',
    nombres: 'Fernando',
    apellidos: 'Marcillo',
    edad: 22,
    nombreDoctor: 'Dc. Armando',
    fecha: '17/03/2023'
  }
];

dataDoctor:any = [{
  cedula: '0151245245',      
  nombres: 'Andrés Luis',
  apellidos: 'Carvajal Lozano',
  especialidad: 'Medico General',
  edad: 50
},
{
  cedula: '0954658913',      
  nombres: 'Jorge Luis',
  apellidos: 'Charco Aguirre',
  especialidad: 'Medico General',
  edad: 36
},
{
  cedula: '0957962158',      
  nombres: 'Andrea Lisbeth',
  apellidos: 'Romero Haro',
  especialidad: 'Medico General',
  edad: 45
}
];

dataPaciente:any = [{
  cedula: '0151245245',      
  nombres: 'Andrés Luis',
  apellidos: 'Carvajal Lozano',
  
  edad: 50
}
];

dataHistorial:any[] = [{
  cedula: '0927472621',      
  nombres: 'Edwin Mendoza',
  apellidos: 'Examenes de Sangre: Globulos rojos bajos',
  especialidad: 'Dra. Sahian Castro',
  edad: '07/01/2023'
},
{
  cedula: '0916083223',      
  nombres: 'Lorena Loaiza',
  apellidos: 'Principio de anemia',
  especialidad: 'Dr. Albuja',
  edad: '25/12/2022'
},
{
  cedula: '0957962158',      
  nombres: 'Andrea Ayala',
  apellidos: 'Deficis de atencion',
  especialidad: 'Dr. Jimenez',
  edad: '15/08/2022'
}
];


  actualizarTabla(){
    if(this.index>0){
      this.dataCitas.splice(this.index,this.index);
    }else{
      this.dataCitas.shift();
    }
  }
  actualizarTablaDoctor(){
    if(this.index>0){
      this.dataDoctor.splice(this.index,this.index);
    }else{
      this.dataDoctor.shift();
    }
  }

  actualizarTablaPaciente(){
    if(this.index>0){
      this.dataPaciente.splice(this.index,this.index);
    }else{
      this.dataPaciente.shift();
    }
  }

  actualizarTablaHistorial(){
    if(this.index>0){
      this.dataHistorial.splice(this.index,this.index);
    }else{
      this.dataHistorial.shift();
    }
  }
}
