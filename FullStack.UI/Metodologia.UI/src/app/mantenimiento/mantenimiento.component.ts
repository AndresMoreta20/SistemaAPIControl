import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

  tablas: any[] = [];
  tablaPlan: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Consumir la API y asignar los datos a la tabla "Tipo Trabajador"
    this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/TipoTrabajador')
      .subscribe(data => {
        const tabla = {
          nombre: 'Tipo Trabajador',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });
      

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/Genero')
      .subscribe(data => {
        const tabla = {
          nombre: 'Género',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/EstadoTrabajador')
      .subscribe(data => {
        const tabla = {
          nombre: 'Estado Trabajador',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/PeriodoVacaciones')
      .subscribe(data => {
        const tabla = {
          nombre: 'Periodo Vacaciones',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/TipoComision')
      .subscribe(data => {
        const tabla = {
          nombre: 'Tipo de Comisión',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/DecimoTerceroDecimoCuarto')
      .subscribe(data => {
        const tabla = {
          nombre: 'Cálculo décimos',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/FondoReserva')
      .subscribe(data => {
        const tabla = {
          nombre: 'Fondo de Reserva',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/TipoContrato')
      .subscribe(data => {
        const tabla = {
          nombre: 'Tipo de Contrato',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/TipoCese')
      .subscribe(data => {
        const tabla = {
          nombre: 'Tipo de Cese',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/EstadoCivil')
      .subscribe(data => {
        const tabla = {
          nombre: 'Estado Civil',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/EsReingreso')
      .subscribe(data => {
        const tabla = {
          nombre: 'Es Reingreso',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/TipoCuenta')
      .subscribe(data => {
        const tabla = {
          nombre: 'Tipo de Cuenta',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/CategoriaOcupacional')
      .subscribe(data => {
        const tabla = {
          nombre: 'Categoría Ocupacional',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/NivelSalarial')
      .subscribe(data => {
        const tabla = {
          nombre: 'Nivel Salarial',
          atributos: ['Codigo', 'Descripcion'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablas.push(tabla);
      });

      this.http.get<any[]>('https://localhost:7036/api/GestionUsuario/PlandeCuentas')
      .subscribe(data => {
        const tabla = {
          nombre: 'Plan de Cuentas',
          atributos: ['CodigoTipoCuenta', 'Cuenta', 'CuentaCaracter', 'DescripcionCuenta', 'Auxiliar_Controla_Cuenta', 'Estado'],
          mostrarAtributos: false,
          datos: data
        };
        this.tablaPlan.push(tabla);
      });

      
  }

  mostrarAtributos(tabla: any) {
    tabla.mostrarAtributos = !tabla.mostrarAtributos;
  }

  generarArchivoCSV(): void {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(this.convertirDatosAXLS(this.tablaPlan));
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, 'mantenimiento.xls');
  }
  
  convertirDatosAXLS(datos: any[]): any[][] {
    const encabezados = Object.keys(datos[0]);
    const filas = datos.map(dato => encabezados.map(encabezado => dato[encabezado]));
    return [encabezados, ...filas];
  }
}