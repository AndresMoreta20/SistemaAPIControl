import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { CentroCostosComponent } from './centro-costos/centro-costos.component';
import { EditarCostoComponent } from './editar-costo/editar-costo.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
<<<<<<< HEAD
import { CentroPlanillasComponent } from './centro-planillas/centro-planillas.component';
=======
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { CuentasComponent } from './cuentas/cuentas.component';
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098

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
  },
  {
<<<<<<< HEAD
    path: 'planillas', component:CentroPlanillasComponent
=======
    path: 'mantenimiento', component:MantenimientoComponent
  },
  {
    path: 'operaciones', component:OperacionesComponent
  },
  {
    path: 'cuentas', component:CuentasComponent
>>>>>>> 5f1c086a545b8eb16d1715a84d5d3711098dc098
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
