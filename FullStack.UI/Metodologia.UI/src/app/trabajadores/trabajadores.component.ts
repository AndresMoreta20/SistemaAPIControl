import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent {
  res: any;
  resultado: any;
  emisorCodigo: string = "";

  constructor(private http: HttpClient, private sharedService: SharedService) { }


  data = [
    { campo: 'COMP_Codigo', valor: 2 },
    { campo: 'Id_Trabajador', valor: 1 },
    { campo: 'Tipo_trabajador', valor: 'Administrativo' },
    // Resto de los campos y valores...
  ];

  
  ngOnInit(): void {

    this.emisorCodigo = this.sharedService.emisorCodigo;
    console.log(this.emisorCodigo);
   

    
  }

  onButton(){
    console.log(this.emisorCodigo);
    this.onSearch();
  }

  onSearch() {
    const url = `https://localhost:7036/api/GestionUsuario/Trabajador/Search?sucursal=${this.emisorCodigo}`;
  
    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.res = this.res[0];
      this.resultado = this.res[0];
      console.log(this.res);
  
      // Ejemplo de uso del resultado
     
    });
  }
}
