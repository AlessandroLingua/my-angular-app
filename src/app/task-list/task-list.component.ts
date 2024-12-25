import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../task/interfaces';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule, TaskComponent],
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

  newTaskTitle = '';
  newTaskDescription = '';
  newDueDate = new Date();
  selectedTask: Task | null = null;

  filter: string = '';

  addTask() {
    if (this.newTaskTitle && this.newTaskDescription && this.newDueDate) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        dueDate: new Date(this.newDueDate),
        completed: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
      this.newTaskDescription = '';
      this.newDueDate = new Date();
    }
  }

  editTask(task: Task) {
    this.selectedTask = { ...task, 
      dueDate: new Date(task.dueDate).toISOString().split('T')[0]};
  }

  updateTask() {
    if (this.selectedTask) {
      const taskIndex = this.tasks.findIndex(task => task.id === this.selectedTask!.id);
      if (taskIndex > -1) {
        this.tasks[taskIndex] = { ...this.selectedTask, dueDate: new Date(this.selectedTask.dueDate) };
      }
      this.selectedTask = null; // Close edit form
    }
  }

  cancelEdit() {
    this.selectedTask = null;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
