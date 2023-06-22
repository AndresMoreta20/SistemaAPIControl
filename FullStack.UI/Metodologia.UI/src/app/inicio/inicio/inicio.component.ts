import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  emisorCodigo: string = "";

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.emisorCodigo = this.sharedService.emisorCodigo;
    console.log(this.emisorCodigo);
  }
}
