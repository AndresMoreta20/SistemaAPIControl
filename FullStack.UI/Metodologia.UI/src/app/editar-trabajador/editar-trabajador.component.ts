import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent {
  res: any;
  @Output() closeModalEvent = new EventEmitter<void>();



  formData = {
    COMP_Codigo: "",
    Id_Trabajador: 0,
    Tipo_trabajador: "",
    Apellido_Paterno: "",
    Apellido_Materno: "",
    Nombres: "",
    Identificacion: "",
    Entidad_Bancaria: "",
    CarnetIESS: "",
    Direccion: "",
    Telefono_Fijo: "",
    Telefono_Movil: "",
    Genero: "",
    Nro_Cuenta_Bancaria: "",
    Codigo_Categoria_Ocupacion: "",
    Ocupacion: "",
    Centro_Costos: "",
    Nivel_Salarial: "",
    EstadoTrabajador: "",
    Tipo_Contrato: "",
    Tipo_Cese: "",
    EstadoCivil: "",
    TipodeComision: "",
    FechaNacimiento: "",
    FechaIngreso: "",
    FechaCese: "",
    PeriododeVacaciones: 0,
    FechaReingreso: "",
    Fecha_Ult_Actualizacion: "",
    EsReingreso: "",
    Tipo_Cuenta: "",
    FormaCalculo13ro: 0,
    FormaCalculo14ro: 0,
    BoniComplementaria: 0,
    BoniEspecial: 0,
    Remuneracion_Minima: 0,
    CuotaCuentaCorriente: 0,
    Fondo_Reserva: "",
    Mensaje: ""


  };


  // ...
  ngOnInit(): void {
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

  closeModal() {
    this.closeModalEvent.emit(); // Emit the event
  }

  constructor(private http: HttpClient) { }


  AgregarRegistro() {
    const url = 'https://localhost:7036/api/GestionUsuario/Trabajador/Insert?codigo='
      + this.formData.COMP_Codigo; +
      '&Id_Trabajado=' + this.formData.Id_Trabajador; +
      "&Tipo_trabajador=" + this.formData.Tipo_trabajador +
      "&Apellido_Paterno=" + this.formData.Apellido_Paterno +
      "&Apellido_Materno=" + this.formData.Apellido_Materno +
      "&Nombres=" + this.formData.Nombres +
      "&Identificacion=" + this.formData.Identificacion +
      "&Entidad_Bancaria=" + this.formData.Entidad_Bancaria +
      "&CarnetIESS=" + this.formData.CarnetIESS +
      "&Direccion=" + this.formData.Direccion +
      "&Telefono_Fijo=" + this.formData.Telefono_Fijo +
      "&Telefono_Movil=" + this.formData.Telefono_Movil +
      "&Genero=" + this.formData.Genero +
      "&Nro_Cuenta_Bancaria=" + this.formData.Nro_Cuenta_Bancaria +
      "&Codigo_Categoria_Ocupacion=" + this.formData.Codigo_Categoria_Ocupacion +
      "&Ocupacion=" + this.formData.Ocupacion +
      "&Centro_Costos=" + this.formData.Centro_Costos +
      "&Nivel_Salarial=" + this.formData.Nivel_Salarial +
      "&EstadoTrabajador=" + this.formData.EstadoTrabajador +
      "&Tipo_Contrato=" + this.formData.Tipo_Contrato +
      "&Tipo_Cese=" + this.formData.Tipo_Cese +
      "&EstadoCivil=" + this.formData.EstadoCivil +
      "&TipodeComision=" + this.formData.TipodeComision +
      "&FechaNacimiento=" + this.formData.FechaNacimiento +
      "&FechaIngreso=" + this.formData.FechaIngreso +
      "&FechaCese=" + this.formData.FechaCese +
      "&PeriododeVacaciones=" + this.formData.PeriododeVacaciones +
      "&FechaReingreso=" + this.formData.FechaReingreso +
      "&Fecha_Ult_Actualizacion=" + this.formData.Fecha_Ult_Actualizacion +
      "&EsReingreso=" + this.formData.EsReingreso +
      "&Tipo_Cuenta=" + this.formData.Tipo_Cuenta +
      "&FormaCalculo13ro=" + this.formData.FormaCalculo13ro +
      "&FormaCalculo14ro=" + this.formData.FormaCalculo14ro +
      "&BoniComplementaria=" + this.formData.BoniComplementaria +
      "&BoniEspecial=" + this.formData.BoniEspecial +
      "&Remuneracion_Minima=" + this.formData.Remuneracion_Minima +
      "&CuotaCuentaCorriente=" + this.formData.CuotaCuentaCorriente +
      "&Fondo_Reserva=" + this.formData.Fondo_Reserva +
      "&Mensaje=" + this.formData.Mensaje;

    this.http.get(url).subscribe(async (response) => {

      this.res = response;

      this.res = this.res[0];
      location.reload();
    });
  }


  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
    // You can close the form popup here if needed
  }

  //******************APIS para Crear*************************** */
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
