import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items: string[] = [];
  newItem: string = '';

  // 1) Inject service through constructor
  constructor(private dataService: DataService) {}

  // 2) Fetch initial data in ngOnInit
  ngOnInit() {
    this.items = this.dataService.getItems();
  }

  // 3) Use a method from the service to add items
  onAddItem() {
    if (this.newItem.trim()) {
      this.dataService.addItem(this.newItem.trim());
      this.newItem = '';
      // Refresh the local array
      this.items = this.dataService.getItems();
    }
  }
}
