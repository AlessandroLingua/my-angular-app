import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from './interfaces';

@Component({
  selector: 'app-task',
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  toggleComplete() {
    this.task.completed = !this.task.completed;
  }
}
