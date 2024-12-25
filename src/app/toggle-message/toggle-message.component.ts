import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-message',
  imports: [CommonModule],
  templateUrl: './toggle-message.component.html',
  styleUrl: './toggle-message.component.css'
})
export class ToggleMessageComponent {
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
