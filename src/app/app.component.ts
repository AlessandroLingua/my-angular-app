import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterComponent } from './counter/counter.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReversePipe } from "./pipes/reverse.pipe";
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetingComponent, CounterComponent, DirectivesComponent, ReversePipe, CommonModule, TaskListComponent],
  templateUrl: './app.component.html',
  template: ``,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning Project in Angular';
  names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
  filterText: string = ''; // Input for filtering
}
