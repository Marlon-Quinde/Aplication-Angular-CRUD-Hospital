import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../services/service.service';
import { LoginComponent } from '../login/login.component';




@Component({
  selector: 'app-page-inicial',
  templateUrl: './page-inicial.component.html',
  styleUrls: ['./page-inicial.component.css']
})
export class PageInicialComponent implements OnInit {

  constructor(private dialog:MatDialog,private service:ServiceService) { }
  openDialogSesion(){
    this.dialog.open(LoginComponent)
  }

  ngOnInit(): void {
  }

}


