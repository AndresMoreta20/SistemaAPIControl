import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  arregloObjetos: any = [];
  res: any;
  resultado: any;
  emisorCodigo: string = "";

  constructor(private http: HttpClient, private sharedService: SharedService) { }



  
  ngOnInit(): void {

    this.emisorCodigo = this.sharedService.emisorCodigo;
  
   this.onSearch();

    
  }

  onButton(){
    //this.onSearch();
    console.log(this.arregloObjetos);
  }

  onSearch() {
    const url = `https://localhost:7036/api/GestionUsuario/Trabajador/Search?sucursal=${this.emisorCodigo}`;
  
    this.http.get(url).subscribe(async (response) => {
    //  console.log(response);
      this.res = response;
     this.arregloObjetos = this.res;
    // this.res = this.res[0];
    //  this.resultado = this.res[0];
     // console.log(this.res);
    // this.arregloObjetos = this.res;
  
      // Ejemplo de uso del resultado
     
    });
  }
}
