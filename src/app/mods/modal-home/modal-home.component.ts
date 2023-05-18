import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css'],
})
export class ModalHomeComponent {
  modalOpen = false;
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
