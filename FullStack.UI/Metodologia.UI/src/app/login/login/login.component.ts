import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
//import { DialogOverviewExampleDialog, DialogData } from '../../pop-up/pop-up.component';
import { DialogAnimationsExampleDialog, PopUpComponent } from '../../pop-up/pop-up.component';
import { ModalComponent } from '../../modal/modal.component';
import Swal from 'sweetalert2';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;
  username: string = "";
  password: string = "";
  labelValue: string = "";
  @ViewChild('exampleModal') exampleModal: any;
  emisor: any;
  emisores: any;
  res: any;

  onModal() {
    Swal.fire({
      title: 'Error',
      text: 'Credenciales erróneas',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
  }


  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private sharedService: SharedService) { };



  onSubmit() {

    /*
    const url = 'https://localhost:7036/api/GestionUsuario?usuario=' + this.username + '&password=' + this.password;
    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.res = this.res[0];
      if (this.emisor.Codigo != this.res.COMPANIA) {
        //  this.exampleModal.nativeElement.showModal();
        console.log("Error de acceso");
        this.labelValue = "Error";
        return;
      }
      if (this.res == null) {
        this.router.navigate(['']);
        this.labelValue = "INGRESO FALLIDO";
        // login failed, display error message
        this.errorMessage = 'Error: '
        return;
      }
      if (this.res.OBSERVACION == "INGRESO EXITOSO") {
        this.labelValue = "INGRESO EXITOSO";
        this.router.navigate(['/inicio']);
      }
    });*/

    const url = 'https://localhost:7036/api/GestionUsuario?usuario=' + this.username + '&password=' + this.password;
    this.http.get(url).subscribe(async (response) => {
      try {
        this.res = response;
        this.res = this.res[0];
        if (this.emisor.Codigo != this.res.COMPANIA) {
         
          //  this.exampleModal.nativeElement.showModal();
          console.log("Error de acceso");
          this.labelValue = "Error";
          return;
        }
        if (this.res == null) {
          this.router.navigate(['']);
          this.labelValue = "INGRESO FALLIDO";
          // login failed, display error message
          this.errorMessage = 'Error: '
          return;
        }
        if (this.res.OBSERVACION == "INGRESO EXITOSO") {
          this.labelValue = "INGRESO EXITOSO";
          this.storeData();
          this.retrieveData();
          this.sharedService.emisorCodigo = this.emisor.Codigo;
          this.router.navigate(['/trabajadores']);

        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: 'Error',
          text: 'Credenciales erróneas',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        })
      }
    });


    console.log("");


  }
  ngOnInit(): void {
    this.http.get('https://localhost:7036/api/GestionUsuario/Emisores').subscribe(response => {
      this.emisores = response;
      console.log("Emisores: ", this.emisores);
    });
  }

  storeData() {
    window.sessionStorage.setItem('Codigo', this.emisor.Codigo);
  
  }

  retrieveData() {
    const codigo = window.sessionStorage.getItem('Codigo');
    console.log(codigo);
  }

  clearData() {
    window.sessionStorage.removeItem('nombre');
  }

}
