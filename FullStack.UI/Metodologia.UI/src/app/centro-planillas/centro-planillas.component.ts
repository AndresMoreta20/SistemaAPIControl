import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-centro-planillas',
  templateUrl: './centro-planillas.component.html',
  styleUrls: ['./centro-planillas.component.css']
})
export class CentroPlanillasComponent {

  planillas: any[] = [];
  conceptos: number = 0;
  prioridad: number = 0;
  tipooperacion: number = 0;
  cuenta1: number = 0;
  cuenta2: number = 0;
  cuenta3: number = 0;
  cuenta4: number = 0;
  MovimientoExcepcion1: number = 0;
  MovimientoExcepcion2: number = 0;
  MovimientoExcepcion3: number = 0;
  Traba_Aplica_iess: number = 0;
  Traba_Proyecto_imp_renta: number = 0;
  Aplica_Proy_Renta: number = 0;
  Empresa_Afecta_Iess: number = 0;
  Concepto: number = 0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getMovimientoPlanillaSelect();
  }

  getMovimientoPlanillaSelect() {
    const url = 'https://localhost:7036/api/GestionUsuario/MovimientoPlanillaSelect';
    this.httpClient.get(url).subscribe(
      (response: any) => {
        this.planillas = response;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  actualizarPlanilla(planilla: any) {
    const url = `https://localhost:7036/api/GestionUsuario/MovimientoPlanillaUpdate?codigoplanilla=${planilla.codigoplanilla}&conceptos=${planilla.conceptos}&prioridad=${planilla.prioridad}&tipooperacion=${planilla.tipooperacion}&cuenta1=${planilla.cuenta1}&cuenta2=${planilla.cuenta2}&cuenta3=${planilla.cuenta3}&cuenta4=${planilla.cuenta4}&MovimientoExcepcion1=${planilla.MovimientoExcepcion1}&MovimientoExcepcion2=${planilla.MovimientoExcepcion2}&MovimientoExcepcion3=${planilla.MovimientoExcepcion3}&Traba_Aplica_iess=${planilla.Traba_Aplica_iess}&Traba_Proyecto_imp_renta=${planilla.Traba_Proyecto_imp_renta}&Aplica_Proy_Renta=${planilla.Aplica_Proy_Renta}&Empresa_Afecta_Iess=${planilla.Empresa_Afecta_Iess}`;
    this.httpClient.get(url).subscribe(
      (response: any) => {
        console.log('Actualización exitosa');
        // Aquí puedes realizar alguna acción adicional después de la actualización
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  eliminarPlanilla(codigomovimiento: string, descripcionomovimiento: string) {
    this.showAlert((userConfirmed: boolean) => {
      if (userConfirmed) {
        const url = `https://localhost:7036/api/GestionUsuario/MovimientoPlanillaDelete?codigomovimiento=${codigomovimiento}&descripcionomovimiento=${descripcionomovimiento}`;
        this.httpClient.get(url).subscribe(
          (response: any) => {
            console.log('Eliminación exitosa');
            // Aquí puedes realizar alguna acción adicional después de la eliminación
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
      } else {
        // El usuario canceló la acción o cerró la alerta
        // Maneja la situación según tus necesidades o simplemente sale de la función
        return;
      }
    });
  }

  insertarPlanilla(conceptos: number, prioridad: number, tipooperacion: number, cuenta1: number, cuenta2: number, cuenta3: number, cuenta4: number, MovimientoExcepcion1: number, MovimientoExcepcion2: number, MovimientoExcepcion3: number, Traba_Aplica_iess: number, Traba_Proyecto_imp_renta: number, Aplica_Proy_Renta: number, Empresa_Afecta_Iess: number) {
    const url = `https://localhost:7036/api/GestionUsuario/MovimientoPlanillaInsert?conceptos=${conceptos}&prioridad=${prioridad}&tipooperacion=${tipooperacion}&cuenta1=${cuenta1}&cuenta2=${cuenta2}&cuenta3=${cuenta3}&cuenta4=${cuenta4}&MovimientoExcepcion1=${MovimientoExcepcion1}&MovimientoExcepcion2=${MovimientoExcepcion2}&MovimientoExcepcion3=${MovimientoExcepcion3}&Traba_Aplica_iess=${Traba_Aplica_iess}&Traba_Proyecto_imp_renta=${Traba_Proyecto_imp_renta}&Aplica_Proy_Renta=${Aplica_Proy_Renta}&Empresa_Afecta_Iess=${Empresa_Afecta_Iess}`;
    this.httpClient.get(url).subscribe(
      (response: any) => {
        console.log('Inserción exitosa');
        // Aquí puedes realizar alguna acción adicional después de la inserción
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  buscarPlanilla(Concepto: number) {
    const url = `https://localhost:7036/api/GestionUsuario/MovimientoPlanillaSearch?Concepto=${Concepto}`;
    this.httpClient.get(url).subscribe(
      (response: any) => {
        console.log('Búsqueda exitosa');
        // Aquí puedes hacer lo que necesites con la respuesta
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  showAlert(callback: (confirmed: boolean) => void): void {
    Swal.fire({
      title: 'Alerta!',
      text: '¿Estás seguro de que quieres borrar la planilla?',
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

  generarArchivoCSV(): void {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(this.convertirDatosAXLS(this.planillas));
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, 'mantenimiento.xls');
  }
  
  convertirDatosAXLS(datos: any[]): any[][] {
    const encabezados = Object.keys(datos[0]);
    const filas = datos.map(dato => encabezados.map(encabezado => dato[encabezado]));
    return [encabezados, ...filas];
  }
}
