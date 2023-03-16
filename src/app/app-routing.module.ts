import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaSegundariaComponent } from './pagina-segundaria/pagina-segundaria.component';

const routes:Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent,
    pathMatch: 'full'
  },
  {
    path: 'secundaria',
    component: PaginaSegundariaComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
