import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login/login.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,
    AppComponent,
    CentroCostosComponent,
    HeaderComponent

  ],
  imports: [
    FormsModule,  
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
