import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../task/interfaces';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { TaskFilterPipe } from '../pipes/task-filter.pipe';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, TaskComponent, TaskFilterPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Learn Angular',
      description: 'Complete Day 3 exercises.',
      dueDate: new Date(),
      completed: false
    },
    {
      id: 2,
      title: 'Build Task Manager',
      description: 'Implement filtering for tasks.',
      dueDate: new Date(),
      completed: true
    }
  ];

  newTaskTitle: string = '';
  newTaskDescription: string = '';
  filter: string = ''; // Current filter
  filteredTasks: Task[] = [...this.tasks]; // Maintain a filtered task list

  addTask() {
    if (this.newTaskTitle && this.newTaskDescription) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        dueDate: new Date(),
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
      this.newTaskDescription = '';
      this.applyFilter(); // Reapply filter after adding a new task
    }
  }

  applyFilter() {
    if (this.filter) {
      this.filteredTasks = this.tasks.filter(task =>
        this.filter === 'completed' ? task.completed : !task.completed
      );
    } else {
      this.filteredTasks = [...this.tasks];
    }
  }

  onTaskUpdated() {
    this.applyFilter(); // Reapply filter when a task's state changes
  }
}
