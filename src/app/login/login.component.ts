//import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {NavigationExtras, Router} from '@angular/router';
import { SesionService } from '../services/sesion.service';
import { UsuarioInterface } from '../interfaces/Usuario.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  constructor(private service: AuthService, private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  alert: boolean = false;
  usuarioTemp: any;
  
  
  usuarioLogin = new FormGroup({
    Usuario: new FormControl('',Validators.required),
    Password: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })

  onSubmit(){
    this.usuarioLogin.value.Transaccion="VALIDAR_ACCESO";
    this.usuarioTemp = this.usuarioLogin.value.Usuario;

    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any) =>{
      console.log(data);
      localStorage.setItem('userName',this.usuarioTemp);
      localStorage.setItem('token_value',data);
      this.router.navigate(['/opciones']);
      this.dialogRef.close();
    },
    (errorData) => alert(errorData.error))
    // console.log(this.usuario); 
    // for (let i = 0; i < this.usuario.length; i++) {
    //   if( this.usuarioLogin.value.usuario == this.usuario[i].user && this.usuarioLogin.value.password == this.usuario[i].password ){
    //     console.log('YES');
    //     this.estado = true;
    //     this.sesion.validarSesion(this.estado, this.usuario[i].user);
    //     this.router.navigate(['/opciones']);
    //     this.dialogRef.close(); 
    //   }else
    // {
    //   this.alert = true;      
    //   setTimeout(() => this.alert=false, 15000);      
    // }
    
    // this.router.navigate(['/opciones']);
    // this.dialogRef.close(); 
    
  }
}



