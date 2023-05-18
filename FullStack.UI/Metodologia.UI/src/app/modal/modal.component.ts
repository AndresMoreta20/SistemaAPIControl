
import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @ViewChild('myModal') myModal: ElementRef | undefined;;

  openModal() {
    if (this.myModal) {
      const modal = this.myModal.nativeElement;
      modal.show(); // Use 'modal.show()' to open the modal
    }
  }
}
