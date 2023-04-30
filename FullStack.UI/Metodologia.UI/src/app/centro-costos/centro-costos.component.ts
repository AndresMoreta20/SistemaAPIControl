import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.css']
})
export class CentroCostosComponent {
  constructor(private http: HttpClient){};

  costos : any 
    ngOnInit(){
    this.http.get("https://localhost:7036/api/GestionUsuario/Costos").subscribe((response)=>{
      this.costos = response;
      console.log(this.costos);
    });  
    } 
}
