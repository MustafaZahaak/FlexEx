import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  // standalone: true,
  templateUrl: './confirmation-modal.component.html',
  // imports:[FormsModule]
})
export class ConfirmationModalComponent {
  @Output() confirmation: EventEmitter<any> = new EventEmitter<string>();
  confirmationText: string = '';


  constructor(private modalService: NgbModal) { }

  onConfirm() {
    if (this.confirmationText.toLowerCase() === 'confirm') {
      this.confirmation.emit("confirm");
      this.modalService.dismissAll();
    } else {
      this.confirmation.emit(false);
    }
  }

  onCancel() {
    this.confirmation.emit('cancel');
    this.modalService.dismissAll();
  }

  canConfirm(): boolean {
    return this.confirmationText.toLowerCase() === 'confirm';
  }



}
