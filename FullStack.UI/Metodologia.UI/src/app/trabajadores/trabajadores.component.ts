import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';
import { FormPopUpTrabajadoresComponent } from '../form-pop-up-trabajadores/form-pop-up-trabajadores.component';
import { EditarTrabajadorComponent } from '../editar-trabajador/editar-trabajador.component';
import { forkJoin } from 'rxjs';

//******Creacrión Interfaces*************/
interface TipoTrabajador {
  Codigo: string;
  Descripcion: string;
}

interface Genero {
  Codigo: string;
  Descripcion: string;
}

interface EstadoTrabajador {
  Codigo: string;
  Descripcion: string;
}

interface PeriodoVacaciones {
  Codigo: string;
  Descripcion: string;
}

interface TipoComision {
  Codigo: string;
  Descripcion: string;
}

// interface DecimoTerceroDecimoCuarto {
//   Codigo: string;
//   Descripcion: string;
// }

interface FormaCalculo13ro {
  Codigo: string;
  Descripcion: string;
}

interface FormaCalculo14ro {
  Codigo: string;
  Descripcion: string;
}


interface FondoReserva {
  Codigo: string;
  Descripcion: string;
}

interface TipoContrato {
  Codigo: string;
  Descripcion: string;
}

interface TipoCese {
  Codigo: string;
  Descripcion: string;
}

interface EstadoCivil {
  Codigo: string;
  Descripcion: string;
}

interface EsReingreso {
  Codigo: string;
  Descripcion: string;
}

interface TipoCuenta {
  Codigo: string;
  Descripcion: string;
}

interface CategoriaOcupacional {
  Codigo: string;
  Descripcion: string;
}

interface NivelSalarial {
  Codigo: string;
  Descripcion: string;
}


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
  data: any = [];
  selectedRowIndex: number | null = null; //Index para desplegar tabla modificar

  //Para ocultar columnas
  showExtraColumns: boolean = false;
  activeRowIndex: number = -1;

  toggleRow(rowIndex: number) {
    if (this.activeRowIndex === rowIndex) {
      this.activeRowIndex = -1; // Si se hace clic en la fila activa nuevamente, se desactiva
    } else {
      this.activeRowIndex = rowIndex; // Se establece la fila activa al índice de la fila en la que se hizo clic
    }
  }

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  objeto: any;
  trabajador: any;
  COMP_Codigo: string = " ";
  Id_Trabajador: number = 0;
  Tipo_trabajador: string = " ";
  Apellido_Paterno: string = " ";
  Apellido_Materno: string = " ";
  Nombres: string = " ";
  Identificacion: string = " ";
  Entidad_Bancaria: string = " ";
  CarnetIESS: string = " ";
  Direccion: string = " ";
  Telefono_Fijo: string = " ";
  Telefono_Movil: string = " ";
  Genero: string = " ";
  Nro_Cuenta_Bancaria: string = " ";
  Codigo_Categoria_Ocupacion: string = " ";
  Ocupacion: string = " ";
  Centro_Costos: string = " ";
  Nivel_Salarial: string = " ";
  EstadoTrabajador: string = " ";
  Tipo_Contrato: string = " ";
  Tipo_Cese: string = " ";
  EstadoCivil: string = " ";
  TipodeComision: string = " ";
  FechaNacimiento: string = " ";
  FechaIngreso: string = " ";
  FechaCese: string = " ";
  PeriododeVacaciones: number = 0;
  FechaReingreso: string = " ";
  Fecha_Ult_Actualizacion: string = " ";
  EsReingreso: string = " ";
  Tipo_Cuenta: string = " ";
  FormaCalculo13ro: number = 0;
  FormaCalculo14ro: number = 0;
  BoniComplementaria: number = 0;
  BoniEspecial: number = 0;
  Remuneracion_Minima: number = 0;
  CuotaCuentaCorriente: number = 0;
  Fondo_Reserva: string = " ";
  Mensaje: string = " ";

  /****Datos para usar modificar */
  tipo_trabajadorModificado: string = " ";
  apellido_PaternoModificado: string = " ";
  apellido_MaternoModificado: string = " ";
  nombresModificado: string = " ";
  identificacionModificado: string = " ";
  entidad_BancariaModificado: string = " ";
  carnetIESSModificado: string = " ";
  direccionModificado: string = " ";
  telefono_FijoModificado: string = " ";
  telefono_MovilModificado: string = " ";
  generoModificado: string = " ";
  nro_Cuenta_BancariaModificado: string = " ";
  codigo_Categoria_OcupacionModificado: string = " ";
  ocupacionModificado: string = " ";
  centro_CostosModificado: string = " ";
  nivel_SalarialModificado: string = " ";
  estadoTrabajadorModificado: string = " ";
  tipo_ContratoModificado: string = " ";
  tipo_CeseModificado: string = " ";
  estadoCivilModificado: string = " ";
  tipodeComisionModificado: string = " ";
  fechaNacimientoModificado: string = " ";
  fechaIngresoModificado: string = " ";
  fechaCeseModificado: string = " ";
  periododeVacacionesModificado: number = 0;
  fechaReingresoModificado: string = " ";
  fecha_Ult_ActualizacionModificado: string = " ";
  esReingresoModificado: string = " ";
  tipo_CuentaModificado: string = " ";
  formaCalculo13roModificado: number = 0;
  formaCalculo14roModificado: number = 0;
  boniComplementariaModificado: number = 0;
  boniEspecialModificado: number = 0;
  remuneracion_MinimaModificado: number = 0;
  cuotaCuentaCorrienteModificado: number = 0;
  fondo_ReservaModificado: string = " ";
  mensajeModificado: string = " ";



  showFormPopup = false;
  showFormPopupModify = false;
  showEditForm = false;
  showEditFormIndex = -1;

  openFormPopup() {
    this.showFormPopup = true;
  }

  openFormPopupModify() {
    this.showFormPopupModify = true;
  }
  
  closeFormPopup() {
    this.showFormPopup = false;
  }

  closeFormPopupModify() {
    this.showFormPopupModify = false;
  }

  //Formulario editar
  // Método para abrir el formulario de edición y establecer los valores actuales
  openEditForm(objeto: any, index: number) {
    this.selectedRowIndex = index; //Sirve para saber en que fila se abre el form de editar
    this.showEditForm = true;
    this.nombresModificado = objeto.Nombres;
    this.tipo_trabajadorModificado = objeto.Tipo_trabajador;
    this.apellido_PaternoModificado = objeto.Apellido_Paterno;
    this.apellido_MaternoModificado = objeto.Apellido_Materno;
    this.identificacionModificado = objeto.Identificacion;
    this.entidad_BancariaModificado = objeto.Entidad_Bancaria;
    this.carnetIESSModificado = objeto.CarnetIESS;
    this.direccionModificado = objeto.Direccion;
    this.telefono_FijoModificado = objeto.Telefono_Fijo;
    this.telefono_MovilModificado = objeto.Telefono_Movil;
    this.generoModificado = objeto.Genero;
    this.nro_Cuenta_BancariaModificado = objeto.Nro_Cuenta_Bancaria;
    this.codigo_Categoria_OcupacionModificado = objeto.Codigo_Categoria_Ocupacion;
    this.ocupacionModificado = objeto.Ocupacion;
    this.centro_CostosModificado = objeto.Centro_Costos;
    this.nivel_SalarialModificado = objeto.Nivel_Salarial;
    this.estadoTrabajadorModificado = objeto.EstadoTrabajador;
    this.tipo_ContratoModificado = objeto.Tipo_Contrato;
    this.tipo_CeseModificado = objeto.Tipo_Cese;
    this.estadoCivilModificado = objeto.EstadoCivil;
    this.tipodeComisionModificado = objeto.TipodeComision;
    this.fechaNacimientoModificado = objeto.FechaNacimiento;
    this.fechaIngresoModificado = objeto.FechaIngreso;
    this.fechaCeseModificado = objeto.FechaCese;
    this.periododeVacacionesModificado = objeto.PeriododeVacaciones;
    this.fechaReingresoModificado = objeto.FechaReingreso;
    this.fecha_Ult_ActualizacionModificado = objeto.Fecha_Ult_Actualizacion;
    this.esReingresoModificado = objeto.EsReingreso;
    this.tipo_CuentaModificado = objeto.Tipo_Cuenta;
    this.formaCalculo13roModificado = objeto.FormaCalculo13ro;
    this.formaCalculo14roModificado = objeto.FormaCalculo14ro;
    this.boniComplementariaModificado = objeto.BoniComplementaria;
    this.boniEspecialModificado = objeto.BoniEspecial;
    this.remuneracion_MinimaModificado = objeto.Remuneracion_Minima;
    this.cuotaCuentaCorrienteModificado = objeto.CuotaCuentaCorriente;
    this.fondo_ReservaModificado = objeto.Fondo_Reserva;
    this.mensajeModificado = objeto.Mensaje;
  }

  // Método para cerrar el formulario de edición y restablecer los valores
  closeEditForm() {
    this.showEditForm = false;
    this.nombresModificado = '';
    this.tipo_trabajadorModificado = '';
    this.apellido_PaternoModificado = '';
    this.apellido_MaternoModificado = '';
    this.identificacionModificado = '';
    this.entidad_BancariaModificado = '';
    this.carnetIESSModificado = '';
    this.direccionModificado = '';
    this.telefono_FijoModificado = '';
    this.telefono_MovilModificado = '';
    this.generoModificado = '';
    this.nro_Cuenta_BancariaModificado = '';
    this.codigo_Categoria_OcupacionModificado = '';
    this.ocupacionModificado = '';
    this.centro_CostosModificado = '';
    this.nivel_SalarialModificado = '';
    this.estadoTrabajadorModificado = '';
    this.tipo_ContratoModificado = '';
    this.tipo_CeseModificado = '';
    this.estadoCivilModificado = '';
    this.tipodeComisionModificado = '';
    this.fechaNacimientoModificado = '';
    this.fechaIngresoModificado = '';
    this.fechaCeseModificado = '';
    this.periododeVacacionesModificado = 0;
    this.fechaReingresoModificado = '';
    this.fecha_Ult_ActualizacionModificado = '';
    this.esReingresoModificado = '';
    this.tipo_CuentaModificado = '';
    this.formaCalculo13roModificado = 0;
    this.formaCalculo14roModificado = 0;
    this.boniComplementariaModificado = 0;
    this.boniEspecialModificado = 0;
    this.remuneracion_MinimaModificado = 0;
    this.cuotaCuentaCorrienteModificado = 0;
    this.fondo_ReservaModificado = '';
    this.mensajeModificado = '';
    this.selectedRowIndex = null; //Hacer que se quite el index donde se abre el form de editar
  }



  ngOnInit(): void {
    this.retrieveData();
    this.emisorCodigo = this.sharedService.emisorCodigo;

    this.onSearch();

    //this.getGenderFromAPI();

    //this.reemplazarGenero();
    this.unirSolicitudes();

    //Metodos cargar Arrays para Dropdown
    this.getTipoTrabajadores();
    this.getGeneros();
    this.getEstadoTrabajadores();
    this.getPeriodosVacaciones();
    this.getTiposComision();
    this.getFormaCalculo13ro();
    this.getFormaCalculo14ro();
    this.getTiposContrato();
    this.getTipoCese();
    this.getEstadosCivil();
    this.getEsReingresoValues();
    this.getTiposCuenta();
    this.getCategoriasOcupacional();
    this.getNivelesSalarial();
  }

  onButton() {
    //this.onSearch();
    console.log(this.arregloObjetos);
  }

  onSearch() {
    const url = `https://localhost:7036/api/GestionUsuario/Trabajador/Search?sucursal=${window.sessionStorage.getItem('Codigo')}`;

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

  retrieveData() {
    const codigo = window.sessionStorage.getItem('Codigo');
    console.log(codigo);
  }

  AgregarRegistro(objeto: any) {
    const url = 'https://localhost:7036/api/GestionUsuario/Trabajador/Insert?codigo='
      + this.COMP_Codigo;

    this.objeto = objeto;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;

      this.res = this.res[0];
      location.reload();
    });
  }

  // modificarRegistro(objeto: any) {
  //   // Lógica para modificar el registro correspondiente
  //   // Puedes utilizar el objeto pasado como parámetro para identificar el registro específico
  //   // y realizar las acciones necesarias (por ejemplo, abrir un formulario de edición).
  //   const url = 'https://localhost:7036/api/GestionUsuario/Trabajador/Update?codigo=' + objeto.COMP_Codigo;

  //   this.http.get(url).subscribe(async (response) => {
  //     this.res = response;
  //     this.res = this.res[0];
  //     location.reload();
  //   });
  // }

  // modificarRegistro(objeto: any, nuevoNombre: string) {
  //   // Lógica para modificar el registro correspondiente
  //   // Puedes utilizar el objeto pasado como parámetro para identificar el registro específico
  //   // y realizar las acciones necesarias (por ejemplo, abrir un formulario de edición).
  //   const url = 'https://localhost:7036/api/GestionUsuario/Trabajador/Update?codigo=' + objeto.COMP_Codigo + '&nuevoNombre=' + nuevoNombre;

  //   this.http.get(url).subscribe(async (response) => {
  //     this.res = response;
  //     this.res = this.res[0];
  //     location.reload();
  //   });
  // }

  modificarTrabajador(objeto: any, tipo_trabajadorModificado: string, apellido_PaternoModificado: string, apellido_MaternoModificado: string, nombresModificado: string, identificacionModificado: string, entidad_BancariaModificado: string, carnetIESSModificado: string, direccionModificado: string, telefono_FijoModificado: string, telefono_MovilModificado: string, generoModificado: string, nro_Cuenta_BancariaModificado: string, codigo_Categoria_OcupacionModificado: string, ocupacionModificado: string, centro_CostosModificado: string, nivel_SalarialModificado: string, estadoTrabajadorModificado: string, tipo_ContratoModificado: string, tipo_CeseModificado: string, estadoCivilModificado: string, tipodeComisionModificado: string, fechaNacimientoModificado: string, fechaIngresoModificado: string, fechaCeseModificado: string, periododeVacacionesModificado: number, fechaReingresoModificado: string, fecha_Ult_ActualizacionModificado: string, esReingresoModificado: string, tipo_CuentaModificado: string, formaCalculo13roModificado: number, formaCalculo14roModificado: number, boniComplementariaModificado: number, boniEspecialModificado: number, remuneracion_MinimaModificado: number, fondo_ReservaModificado: string, mensajeModificado: string) {

    // Lógica para modificar el registro correspondiente
    // Puedes utilizar el objeto pasado como parámetro para identificar el registro específico
    // y realizar las acciones necesarias (por ejemplo, abrir un formulario de edición).
    const url = 'https://localhost:7036/api/GestionUsuario/Trabajador/Update?codigo=' + objeto.COMP_Codigo +
      '&tipoTrabajador=' + tipo_trabajadorModificado +
      '&apellidoPaterno=' + apellido_PaternoModificado +
      '&apellidoMaterno=' + apellido_MaternoModificado +
      '&nombres=' + nombresModificado +
      '&identificacion=' + identificacionModificado +
      '&entidadBancaria=' + entidad_BancariaModificado +
      '&carnetIESS=' + carnetIESSModificado +
      '&direccion=' + direccionModificado +
      '&telefonoFijo=' + telefono_FijoModificado +
      '&telefonoMovil=' + telefono_MovilModificado +
      '&genero=' + generoModificado +
      '&nroCuentaBancaria=' + nro_Cuenta_BancariaModificado +
      '&codigoCategoriaOcupacion=' + codigo_Categoria_OcupacionModificado +
      '&ocupacion=' + ocupacionModificado +
      '&centroCostos=' + centro_CostosModificado +
      '&nivelSalarial=' + nivel_SalarialModificado +
      '&estadoTrabajador=' + estadoTrabajadorModificado +
      '&tipoContrato=' + tipo_ContratoModificado +
      '&tipoCese=' + tipo_CeseModificado +
      '&estadoCivil=' + estadoCivilModificado +
      '&tipoComision=' + tipodeComisionModificado +
      '&fechaNacimiento=' + fechaNacimientoModificado +
      '&fechaIngreso=' + fechaIngresoModificado +
      '&fechaCese=' + fechaCeseModificado +
      '&periodoVacaciones=' + periododeVacacionesModificado +
      '&fechaReingreso=' + fechaReingresoModificado +
      '&fechaUltimaActualizacion=' + fecha_Ult_ActualizacionModificado +
      '&esReingreso=' + esReingresoModificado +
      '&tipoCuenta=' + tipo_CuentaModificado +
      '&formaCalculo13ro=' + formaCalculo13roModificado +
      '&formaCalculo14ro=' + formaCalculo14roModificado +
      '&boniComplementaria=' + boniComplementariaModificado +
      '&boniEspecial=' + boniEspecialModificado +
      '&remuneracionMinima=' + remuneracion_MinimaModificado +
      '&fondoReserva=' + fondo_ReservaModificado +
      '&mensaje=' + mensajeModificado;


    this.http.get(url).subscribe(async (response) => {
      this.res = response;
      this.res = this.res[0];
      location.reload();
    });

    this.closeEditForm();
  }

  borrarRegistro(objeto: any) {
    // Lógica para borrar el registro correspondiente
    // Puedes utilizar el objeto pasado como parámetro para identificar el registro específico
    // y realizar las acciones necesarias (por ejemplo, mostrar un mensaje de confirmación y eliminar el registro de la lista).  
    this.showAlert((userConfirmed: boolean) => {
      if (userConfirmed) {
        const url = `https://localhost:7036/api/GestionUsuario/Trabajador/Delete?codigo=${objeto.COMP_Codigo}`;

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

  showAlert(callback: (confirmed: boolean) => void): void {
    Swal.fire({
      title: 'Alerta!',
      text: '¿Estás seguro de que quieres borrar el trabajador?',
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


  /*****************************Consumo APIS************************************ */

  // getGenderFromAPI() {
  //   const url = 'https://localhost:7036/api/GestionUsuario/Genero';
  //   this.http.get(url).subscribe(async (response) => {
  //     //  console.log(response);
  //     this.res = response;
  //     this.data = this.res;
  //   });
  // }

  // reemplazarGenero() {
  //   // Recorrer los objetos del primer JSON
  //   for (let i = 0; i < this.arregloObjetos.length; i++) {
  //     const objeto = this.arregloObjetos[i];

  //     // Obtener el valor actual del campo "Genero"
  //     const generoActual = objeto.Genero;

  //     // Buscar el correspondiente valor en el segundo JSON
  //     const generoReemplazo = this.data.find((item: any) => item.Codigo === generoActual);

  //     // Actualizar el valor del campo "Genero" si se encontró un reemplazo
  //     if (generoReemplazo) {
  //       objeto.Genero = generoReemplazo.Descripcion;
  //     }
  //   }
  // }



  unirSolicitudes() {
    forkJoin([
      this.http.get('https://localhost:7036/api/GestionUsuario/Trabajador/Search?sucursal=' + window.sessionStorage.getItem('Codigo')),
      this.http.get('https://localhost:7036/api/GestionUsuario/Genero')
    ]).subscribe(([trabajadoresResponse, generoResponse]) => {
      this.arregloObjetos = trabajadoresResponse;
      this.data = generoResponse;

      this.replaceTipoTrabajadorValues();
      this.replaceGeneroValues();
      this.replaceEstadoValues();
      this.replacePeriodoVacacionesValues();
      this.replaceTipoComisionValues();
      this.replaceFormaCalculo13roValues();
      this.replaceFormaCalculo14roValues();
      this.replaceFondoReservaValues();
      this.replaceTipoContratoValues();
      this.replaceTipoCeseValues();
      this.replaceEstadoCivilValues();
      this.replaceEsReingresoValues();
      this.replaceTipoCuentaValues();
      this.replaceCategoriaOcupacionalValues();
      this.replaceNivelSalarialValues();



    });
  }

  // replaceGeneroValues() {
  //   const generoMap: Record<string, string> = {
  //     F: "Femenino",
  //     M: "Masculino",
  //     // Agrega más mapeos si es necesario
  //   };

  //   this.arregloObjetos.forEach((trabajador: any) => {
  //     if (generoMap.hasOwnProperty(trabajador.Genero)) {
  //       if (trabajador.Genero === "F" || trabajador.Genero === "M") {
  //         trabajador.Genero = generoMap[trabajador.Genero];
  //       } else {
  //         // Manejar el caso en el que el valor de trabajador.Genero no es válido
  //       }
  //     }
  //   });
  // }



  replaceTipoTrabajadorValues() {
    this.http.get<TipoTrabajador[]>('https://localhost:7036/api/GestionUsuario/TipoTrabajador').subscribe((response: TipoTrabajador[]) => {
      const estadoMap: Record<string, string> = {};

      response.forEach(item => {
        estadoMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (estadoMap.hasOwnProperty(trabajador.Tipo_trabajador)) {
          trabajador.Tipo_trabajador = estadoMap[trabajador.Tipo_trabajador];
        }
      });
    });
  }

  replaceGeneroValues() {
    this.http.get<Genero[]>('https://localhost:7036/api/GestionUsuario/Genero').subscribe((response: Genero[]) => {
      const generoMap: Record<string, string> = {};

      // Mapear los valores del JSON a generoMap
      response.forEach(item => {
        //generoMap[item.Descripcion] = item.Codigo;
        generoMap[item.Codigo] = item.Descripcion;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (generoMap.hasOwnProperty(trabajador.Genero)) {
          if (trabajador.Genero === "F" || trabajador.Genero === "M") {
            trabajador.Genero = generoMap[trabajador.Genero];
          } else {
            // Manejar el caso en el que el valor de trabajador.Genero no es válido
          }
        }
      });
    });
  }

  replaceEstadoValues() {
    this.http.get<EstadoTrabajador[]>('https://localhost:7036/api/GestionUsuario/EstadoTrabajador').subscribe((response: EstadoTrabajador[]) => {
      const estadoMap: Record<string, string> = {};

      response.forEach(item => {
        estadoMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (estadoMap.hasOwnProperty(trabajador.EstadoTrabajador)) {
          trabajador.EstadoTrabajador = estadoMap[trabajador.EstadoTrabajador];
        }
      });
    });
  }



  replacePeriodoVacacionesValues() {
    this.http.get<PeriodoVacaciones[]>('https://localhost:7036/api/GestionUsuario/PeriodoVacaciones').subscribe((response: PeriodoVacaciones[]) => {
      const periodoVacacionesMap: Record<string, string> = {};

      response.forEach(item => {
        //periodoVacacionesMap[item.Codigo] = item.Descripcion;
        periodoVacacionesMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (periodoVacacionesMap.hasOwnProperty(trabajador.PeriododeVacaciones)) {
          trabajador.PeriododeVacaciones = periodoVacacionesMap[trabajador.PeriododeVacaciones];
        }
      });
    });
  }


  replaceTipoComisionValues() {
    this.http.get<TipoComision[]>('https://localhost:7036/api/GestionUsuario/TipoComision').subscribe((response: TipoComision[]) => {
      const tipoComisionMap: Record<string, string> = {};

      response.forEach(item => {
        tipoComisionMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (tipoComisionMap.hasOwnProperty(trabajador.TipodeComision)) {
          trabajador.TipodeComision = tipoComisionMap[trabajador.TipodeComision];
        }
      });
    });
  }

  replaceFormaCalculo13roValues() {
    this.http.get<FormaCalculo13ro[]>('https://localhost:7036/api/GestionUsuario/DecimoTerceroDecimoCuarto').subscribe((response: FormaCalculo13ro[]) => {
      const formaCalculo13roMap: Record<string, string> = {};

      response.forEach(item => {
        formaCalculo13roMap[item.Descripcion] = item.Codigo;
        //formaCalculo13roMap[item.Codigo] = item.Descripcion;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (formaCalculo13roMap.hasOwnProperty(trabajador.FormaCalculo13ro)) {
          trabajador.FormaCalculo13ro = formaCalculo13roMap[trabajador.FormaCalculo13ro];
        }
      });
    });
  }

  replaceFormaCalculo14roValues() {
    this.http.get<FormaCalculo14ro[]>('https://localhost:7036/api/GestionUsuario/DecimoTerceroDecimoCuarto').subscribe((response: FormaCalculo14ro[]) => {
      const formaCalculo14roMap: Record<string, string> = {};

      response.forEach(item => {
        formaCalculo14roMap[item.Descripcion] = item.Codigo;
        //formaCalculo14roMap[item.Codigo] = item.Descripcion;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (formaCalculo14roMap.hasOwnProperty(trabajador.FormaCalculo14ro)) {
          trabajador.FormaCalculo14ro = formaCalculo14roMap[trabajador.FormaCalculo14ro];
        }
      });
    });
  }

  replaceFondoReservaValues() {
    this.http.get<FondoReserva[]>('https://localhost:7036/api/GestionUsuario/FondoReserva').subscribe((response: FondoReserva[]) => {
      const fondoReservaMap: Record<string, string> = {};

      response.forEach(item => {
        //fondoReservaMap[item.Codigo] = item.Descripcion;
        fondoReservaMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (fondoReservaMap.hasOwnProperty(trabajador.Fondo_Reserva)) {
          trabajador.Fondo_Reserva = fondoReservaMap[trabajador.Fondo_Reserva];
        }
      });
    });
  }



  replaceTipoContratoValues() {
    this.http.get<TipoContrato[]>('https://localhost:7036/api/GestionUsuario/TipoContrato').subscribe((response: TipoContrato[]) => {
      const tipoContratoMap: Record<string, string> = {};

      response.forEach(item => {
        tipoContratoMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (tipoContratoMap.hasOwnProperty(trabajador.Tipo_Contrato)) {
          trabajador.Tipo_Contrato = tipoContratoMap[trabajador.Tipo_Contrato];
        }
      });
    });
  }



  replaceTipoCeseValues() {
    this.http.get<TipoCese[]>('https://localhost:7036/api/GestionUsuario/TipoCese').subscribe((response: TipoCese[]) => {
      const tipoCeseMap: Record<string, string> = {};

      response.forEach(item => {
        tipoCeseMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (tipoCeseMap.hasOwnProperty(trabajador.Tipo_Cese)) {
          trabajador.Tipo_Cese = tipoCeseMap[trabajador.Tipo_Cese];
        }
      });
    });
  }



  replaceEstadoCivilValues() {
    this.http.get<EstadoCivil[]>('https://localhost:7036/api/GestionUsuario/EstadoCivil').subscribe((response: EstadoCivil[]) => {
      const estadoCivilMap: Record<string, string> = {};

      response.forEach(item => {
        estadoCivilMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (estadoCivilMap.hasOwnProperty(trabajador.EstadoCivil)) {
          trabajador.EstadoCivil = estadoCivilMap[trabajador.EstadoCivil];
        }
      });
    });
  }



  replaceEsReingresoValues() {
    this.http.get<EsReingreso[]>('https://localhost:7036/api/GestionUsuario/EsReingreso').subscribe((response: EsReingreso[]) => {
      const esReingresoMap: Record<string, string> = {};

      response.forEach(item => {
        esReingresoMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (esReingresoMap.hasOwnProperty(trabajador.EsReingreso)) {
          trabajador.EsReingreso = esReingresoMap[trabajador.EsReingreso];
        }
      });
    });
  }



  replaceTipoCuentaValues() {
    this.http.get<TipoCuenta[]>('https://localhost:7036/api/GestionUsuario/TipoCuenta').subscribe((response: TipoCuenta[]) => {
      const tipoCuentaMap: Record<string, string> = {};

      response.forEach(item => {
        tipoCuentaMap[item.Descripcion] = item.Codigo;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (tipoCuentaMap.hasOwnProperty(trabajador.Tipo_Cuenta)) {
          trabajador.Tipo_Cuenta = tipoCuentaMap[trabajador.Tipo_Cuenta];
        }
      });
    });
  }

  replaceCategoriaOcupacionalValues() {
    this.http.get<CategoriaOcupacional[]>('https://localhost:7036/api/GestionUsuario/CategoriaOcupacional').subscribe((response: CategoriaOcupacional[]) => {
      const categoriaOcupacionalMap: Record<string, string> = {};

      response.forEach(item => {
        categoriaOcupacionalMap[item.Descripcion] = item.Codigo;
        //categoriaOcupacionalMap[item.Codigo] = item.Descripcion;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (categoriaOcupacionalMap.hasOwnProperty(trabajador.Codigo_Categoria_Ocupacion)) {
          trabajador.Codigo_Categoria_Ocupacion = categoriaOcupacionalMap[trabajador.Codigo_Categoria_Ocupacion];
        }
      });
    });
  }

  replaceNivelSalarialValues() {
    this.http.get<NivelSalarial[]>('https://localhost:7036/api/GestionUsuario/NivelSalarial').subscribe((response: NivelSalarial[]) => {
      const nivelSalarialMap: Record<string, string> = {};

      response.forEach(item => {
        nivelSalarialMap[item.Descripcion] = item.Codigo;
        //nivelSalarialMap[item.Codigo] = item.Descripcion;
      });

      this.arregloObjetos.forEach((trabajador: any) => {
        if (nivelSalarialMap.hasOwnProperty(trabajador.Nivel_Salarial)) {
          trabajador.Nivel_Salarial = nivelSalarialMap[trabajador.Nivel_Salarial];
        }
      });
    });
  }

  //******************APIS para MODIFICAR*************************** */
  tipoTrabajadores: TipoTrabajador[] = [];
  getTipoTrabajadores() {
    const url = 'https://localhost:7036/api/GestionUsuario/TipoTrabajador';
  
    this.http.get<TipoTrabajador[]>(url).subscribe(
      (response) => {
        this.tipoTrabajadores = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de trabajador:', error);
      }
    );
  }

  generos: Genero[] = [];
  getGeneros() {
    const url = 'https://localhost:7036/api/GestionUsuario/Genero';
  
    this.http.get<Genero[]>(url).subscribe(
      (response) => {
        this.generos = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  estadoTrabajadores: EstadoTrabajador[] = [];
  getEstadoTrabajadores() {
    const url = 'https://localhost:7036/api/GestionUsuario/EstadoTrabajador';
  
    this.http.get<EstadoTrabajador[]>(url).subscribe(
      (response) => {
        this.estadoTrabajadores = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  periodosVacaciones: PeriodoVacaciones[] = [];
  getPeriodosVacaciones() {
    const url = 'https://localhost:7036/api/GestionUsuario/PeriodoVacaciones';
  
    this.http.get<PeriodoVacaciones[]>(url).subscribe(
      (response) => {
        this.periodosVacaciones = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  tiposComision: TipoComision[] = [];
  getTiposComision() {
    const url = 'https://localhost:7036/api/GestionUsuario/TipoComision';
  
    this.http.get<TipoComision[]>(url).subscribe(
      (response) => {
        this.tiposComision = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  formasCalculo13ro: FormaCalculo13ro[] = [];
  getFormaCalculo13ro() {
    const url = 'https://localhost:7036/api/GestionUsuario/DecimoTerceroDecimoCuarto';
  
    this.http.get<FormaCalculo13ro[]>(url).subscribe(
      (response) => {
        this.formasCalculo13ro = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  formasCalculo14ro: FormaCalculo14ro[] = [];
  getFormaCalculo14ro() {
    const url = 'https://localhost:7036/api/GestionUsuario/DecimoTerceroDecimoCuarto';
  
    this.http.get<FormaCalculo14ro[]>(url).subscribe(
      (response) => {
        this.formasCalculo14ro = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  fondosReserva: FondoReserva[] = [];
  getFondosReserva() {
    const url = 'https://localhost:7036/api/GestionUsuario/FondoReserva';
  
    this.http.get<FondoReserva[]>(url).subscribe(
      (response) => {
        this.fondosReserva = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  tiposContrato: TipoContrato[] = [];
  getTiposContrato() {
    const url = 'https://localhost:7036/api/GestionUsuario/TipoContrato';
  
    this.http.get<TipoContrato[]>(url).subscribe(
      (response) => {
        this.tiposContrato = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }

  tiposCese: TipoCese[] = [];
  getTipoCese() {
    const url = 'https://localhost:7036/api/GestionUsuario/TipoCese';
  
    this.http.get<TipoCese[]>(url).subscribe(
      (response) => {
        this.tiposCese = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  estadosCivil: EstadoCivil[] = [];
  getEstadosCivil() {
    const url = 'https://localhost:7036/api/GestionUsuario/EstadoCivil';
  
    this.http.get<EstadoCivil[]>(url).subscribe(
      (response) => {
        this.estadosCivil = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  esReingresos: EsReingreso[] = [];
  getEsReingresoValues() {
    const url = 'https://localhost:7036/api/GestionUsuario/EsReingreso';
  
    this.http.get<EsReingreso[]>(url).subscribe(
      (response) => {
        this.esReingresos = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  tiposCuenta: TipoCuenta[] = [];
  getTiposCuenta() {
    const url = 'https://localhost:7036/api/GestionUsuario/TipoCuenta';
  
    this.http.get<TipoCuenta[]>(url).subscribe(
      (response) => {
        this.tiposCuenta = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  categoriasOcupacional: CategoriaOcupacional[] = [];
  getCategoriasOcupacional() {
    const url = 'https://localhost:7036/api/GestionUsuario/CategoriaOcupacional';
  
    this.http.get<CategoriaOcupacional[]>(url).subscribe(
      (response) => {
        this.categoriasOcupacional = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  
  nivelesSalarial: NivelSalarial[] = [];
  getNivelesSalarial() {
    const url = 'https://localhost:7036/api/GestionUsuario/NivelSalarial';
  
    this.http.get<FondoReserva[]>(url).subscribe(
      (response) => {
        this.nivelesSalarial = response;
      },
      (error) => {
        console.error('Error al obtener los tipos de genero:', error);
      }
    );
  }
  

}
