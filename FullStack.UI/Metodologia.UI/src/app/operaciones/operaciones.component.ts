import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {

  constructor(private router: Router) { }
  
  goToListCostos() {
    this.router.navigate(['/costos']);
  }

  goToListPlanillas() {
    this.router.navigate(['/costos']);
  }

  goToListTrabajadores() {
    this.router.navigate(['/trabajadores']);
  }

  goToListCuentas() {
    this.router.navigate(['/cuentas']);
  }
}

