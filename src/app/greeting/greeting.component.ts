import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  @Input () name: string = '';

  message: string = ''; // Property to store the custom message
  message2: string = '';
  countClicked: number = 0; // Property to store the custom message
  toggleMessage() {
    this.countClicked++;
    if (this.message) {
      this.message = ''; // Hide the message
    } else {
      this.message = `Great to see you, ${this.name}!`; // Show the message
    }

    if(this.countClicked > 0){
      this.message2 = `Conto clicks: ${this.countClicked}`
    }
  }

}
