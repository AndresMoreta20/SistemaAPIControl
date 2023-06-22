import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { EditarCostoComponent } from './editar-costo/editar-costo.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: 'inicio', component:InicioComponent
  },
  {
    path: 'costos', component:CentroCostosComponent
  },
  {
    path: 'editar', component:EditarCostoComponent
  },
  {
    path: 'trabajadores', component:TrabajadoresComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
