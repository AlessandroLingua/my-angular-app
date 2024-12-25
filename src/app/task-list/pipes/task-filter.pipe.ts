import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../task/interfaces';


@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], filter: string): Task[] {
    if (!tasks || !filter) {
      return tasks; // Return all tasks if no filter is applied
    }
    switch (filter) {
      case 'completed':
        return tasks.filter(task => !task.completed);
      case 'incompleted':
        return tasks.filter(task => task.completed);
      default:
        return tasks; // Return all tasks for invalid filter
    }
  }
}
