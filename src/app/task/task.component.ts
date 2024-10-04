import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from "./new-task/new-task.model";
import { TaskService } from "./task.service";
@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [TaskListComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

@Input() name: string|undefined;
// @Input() name?: string;
@Input({required:true}) selectedUser!: string;
isAddingNewTask = false;

constructor(private taskService: TaskService){}

get selectedUsertasks(){
  return this.taskService.getUserTasks(this.selectedUser);
}

// onCompleteTask(id: string){
//   this.taskService.completeTask(id);
// }

onAddTask(){
 this.isAddingNewTask = true;
}

onCancelAddNewTask(cancel: boolean){
  this.isAddingNewTask = cancel;
}

// onSubmit(task: NewTask){
//   this.taskService.insertNewTask(task,this.selectedUser);
//   this.isAddingNewTask  = false;
// }
}
