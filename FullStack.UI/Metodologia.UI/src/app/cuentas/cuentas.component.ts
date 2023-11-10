import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router ,  private sharedService: SharedService){};

  arregloObjetos: any = [];
  res: any;
  resultado: any;
  emisorCodigo: string = "";

  objeto: any;
  cuenta: any;
  Sucursal: string = " ";
  CodigoConceptoNomina : string = " ";
  DescripcionConcepto: string = " ";
  CodigoCategoriaocupacional: string = " ";
  DescripcionCategoria: string = " ";
  CodigoOperacion: string = " ";
  CodigoCuentaContable: string = " ";
  CodigoTipoCuenta: string = " ";
  DescripcionCuenta: string = " ";
  Mensaje: string = " ";


  showFormPopup = false;
  showEditForm = false;

  openFormPopup() {
    this.showFormPopup = true;
  }
  closeFormPopup() {
    this.showFormPopup = false;
  }
  openEditForm() {
    this.showEditForm = true;
  }
  closeEditForm() {
    this.showEditForm = false;
  }
  
  

  ngOnInit() {
    this.retrieveData();
    this.emisorCodigo = this.sharedService.emisorCodigo;
    this.onStart();

  }

  retrieveData() {
    const codigo = window.sessionStorage.getItem('Codigo');
    console.log(codigo);
  }

  onButton() {
    //this.onSearch();
    console.log(this.arregloObjetos);
  }

  onStart(){
    const url = `https://localhost:7036/api/GestionUsuario/GestionContableNomina?sucursal=${window.sessionStorage.getItem('Codigo')}`;

    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.arregloObjetos = this.res;
    });
  }

  onInsert(){
    // const url = 'https://localhost:7036/api/GestionUsuario/Costos/Insert?codigo=' + this.codigo + '&descripcion=' + this.descripcion;

    // this.http.get(url).subscribe(async (response) => {

    //   this.res = response;
     
    //   this.res = this.res[0];
    //   location.reload();


    // });
  }

  onDelete(codigo: string, descripcion: string) {
    this.showAlert((userConfirmed: boolean) => {
      if (userConfirmed) {
        const url = `https://localhost:7036/api/GestionUsuario/Costos/Delete?codigo=${codigo}&descripcion=${descripcion}`;
  
        this.http.get(url).subscribe(async (response) => {
          this.res = response;
          this.res = this.res[0];
          location.reload();
        });
      } else {
        // User cancelled the action or dismissed the alert
        // Handle accordingly or exit the function
        return;
      }
    });
  }
/*
  onDelete(codigo: string, descripcion: string) {


    const url = 'https://localhost:7036/api/GestionUsuario/Costos/Delete?codigo=' + codigo + '&descripcion=' + descripcion;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;
     
      this.res = this.res[0];
      location.reload();

    });
  }*/

  onUpdate(codigo: string, nuevaDescripcion: string) {
    const url = 'https://localhost:7036/api/GestionUsuario/Costos/Update?codigo=' + codigo + '&nuevaDescripcion=' + nuevaDescripcion;
  
    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.res = this.res[0];
      location.reload();
    });
  }

  onSearch(descripcioncentrocostos: string) {

    
    
    const url = `https://localhost:7036/api/GestionUsuario/Costos/Search?descripcioncentrocostos=${descripcioncentrocostos}`;
    
    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.res = this.res[0];
      this.resultado = this.res[0];
      //console.log(this.busqueda);
      // Aquí puedes hacer lo que necesites con la respuesta
    });
  }
  
  showAlert(callback: (confirmed: boolean) => void): void {
    Swal.fire({
      title: 'Alerta!',
      text: '¿Estás seguro de que quieres borrar el costo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        callback(true);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Cancelled');
        callback(false);
      }
    });
  }
  
}
