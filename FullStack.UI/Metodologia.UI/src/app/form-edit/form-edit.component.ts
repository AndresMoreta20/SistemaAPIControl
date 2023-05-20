import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent {
  parametro1: string = '';
  parametro2: string = '';

  @Output() closeModalEvent = new EventEmitter();

  onInsert(parametro1: string, parametro2: string) {
    // Lógica para insertar los parámetros
    console.log('Insertar:', parametro1, parametro2);
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
  submitForm(){
    
  }

}
