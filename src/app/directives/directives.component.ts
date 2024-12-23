import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NameFilterPipe } from '../pipes/name-filter.pipe';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, NameFilterPipe],
  template: ``,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
  filterText: string = ''; // Input for filtering
  showNames: boolean = true;
  currentDate = new Date();
  price = 12345.6789;
  

  toggleNames() {
    this.showNames = !this.showNames;
  }
}
