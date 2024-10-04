import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './tasks-list.model';
import { CardComponent } from "../../sharedui/card/card.component";
import { TaskService } from '../task.service';

// type User = {
//   id: string,
//   userId: string,
//   title: string,
//   summary: string,
//   dueDate: string,
// };

@Component({
  selector: 'app-task-list',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
@Input({required:true}) task!: Task;
// @Output() complete = new EventEmitter<string>();

private taskService = inject(TaskService);

onCompleteTask(){
  // this.complete.emit(this.task.id)
  this.taskService.completeTask(this.task.id);
}
}
