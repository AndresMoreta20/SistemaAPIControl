import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-pop-up-trabajadores',
  templateUrl: './form-pop-up-trabajadores.component.html', 
  styleUrls: ['./form-pop-up-trabajadores.component.css']
})
export class FormPopUpTrabajadoresComponent {
  res: any;
  @Output() closeModalEvent = new EventEmitter<void>(); // Define the event emitter

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
    Fondo_Reserva: "",
    Mensaje: ""


  };


  // ...

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
}
