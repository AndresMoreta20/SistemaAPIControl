import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-centro-costos',
  templateUrl: './centro-costos.component.html',
  styleUrls: ['./centro-costos.component.css']
})
export class CentroCostosComponent {
  res: any;
  constructor(private http: HttpClient, private router: Router){};
 
  costos : any 
  codigo : string = "";
  descripcion: string = "";
  
    ngOnInit(){
    this.http.get("https://localhost:7036/api/GestionUsuario/Costos").subscribe((response)=>{
      this.costos = response;
      console.log(this.costos);
    });  
    } 

  onInsert(){
    const url = 'https://localhost:7036/api/GestionUsuario/Costos/Insert?codigo=' + this.codigo + '&descripcion=' + this.descripcion;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;
     
      this.res = this.res[0];
      location.reload();


    });
  }

  onDelete(codigo: string, descripcion: string) {
    const url = 'https://localhost:7036/api/GestionUsuario/Costos/Delete?codigo=' + codigo + '&descripcion=' + descripcion;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;
     
      this.res = this.res[0];
      location.reload();



    });
  }

  navigateToPageWithParams(param1: string, param2: number) {
    this.router.navigate(['editar'], { queryParams: { param1, param2 } });
  }
}
