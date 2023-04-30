import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = "";
  password: string="";
  labelValue: string="";

  emisor: any;
  emisores: any;
  res: any;
  constructor(private http: HttpClient, private router: Router,) { };
  
  onSubmit() {
    const url = 'https://localhost:7036/api/GestionUsuario?usuario=' + this.username + '&password=' + this.password;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;
     
      this.res = this.res[0];


      if (this.emisor.Codigo != this.res.COMPANIA) {
        console.log("Error de acceso");
        return;
      }

      if (this.res == null) {
        this.router.navigate(['']);
        this.labelValue = "INGRESO FALLIDO";

        return;
      }

      if (this.res.OBSERVACION == "INGRESO EXITOSO") {
       
        this.labelValue = "INGRESO EXITOSO";
        this.router.navigate(['/inicio']);
      }

    });
  }
  ngOnInit(): void {
    this.http.get('https://localhost:7036/api/GestionUsuario/Emisores').subscribe(response => {
      this.emisores = response;
      console.log("Emisores: ", this.emisores);
    });
  }

}
