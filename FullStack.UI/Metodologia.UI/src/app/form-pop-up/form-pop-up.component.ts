import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-pop-up',
  templateUrl: './form-pop-up.component.html',
  styleUrls: ['./form-pop-up.component.css']
})
export class FormPopUpComponent {
   res: any;
   @Output() closeModalEvent = new EventEmitter<void>(); // Define the event emitter

  formData = {
    codigo: '',
    descripcion: ''


  };


  // ...

  closeModal() {
    this.closeModalEvent.emit(); // Emit the event
  }
  
  constructor(private http: HttpClient){}
  
  onInsert(){
    const url = 'https://localhost:7036/api/GestionUsuario/Costos/Insert?codigo=' + this.formData.codigo + '&descripcion=' + this.formData.descripcion;

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
