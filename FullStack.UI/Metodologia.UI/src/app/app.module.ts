import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { LoginComponent } from './login/login/login.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { HeaderComponent } from './header/header.component';
import { EditarCostoComponent } from './editar-costo/editar-costo.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormPopUpComponent } from './form-pop-up/form-pop-up.component';
import { FormPopUpTrabajadoresComponent } from './form-pop-up-trabajadores/form-pop-up-trabajadores.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import {CookieService} from 'ngx-cookie-service';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { CuentasComponent } from './cuentas/cuentas.component';

@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,
    AppComponent,
    CentroCostosComponent,
    HeaderComponent,
    EditarCostoComponent,
    ModalComponent,
    ModalAlertComponent,
    FormPopUpComponent,
    FormPopUpTrabajadoresComponent,
    TrabajadoresComponent,
    FormEditComponent,
    OperacionesComponent,
    MantenimientoComponent,
    CuentasComponent
  ],
  imports: [
    FormsModule,  
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    SweetAlert2Module.forRoot(),
  
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
