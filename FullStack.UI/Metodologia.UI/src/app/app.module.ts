import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login/login.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { HeaderComponent } from './header/header.component';
import { EditarCostoComponent } from './editar-costo/editar-costo.component';

@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,
    AppComponent,
    CentroCostosComponent,
    HeaderComponent,
    EditarCostoComponent

  ],
  imports: [
    FormsModule,  
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
