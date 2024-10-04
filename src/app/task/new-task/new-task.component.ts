import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() cancelled = new EventEmitter<boolean>();
  // @Output() addTask = new EventEmitter<NewTask>();
  // titleInput = signal('');
  // summaryInput = signal('');
  // dueDateInput = signal('');
  titleInput = '';
  summaryInput = '';
  dueDateInput = '';
  
  private taskService = inject(TaskService);

  onCancelAddNewTask(){
    this.cancelled.emit(false);
  }
  
  onSubmit(){
    // this.addTask.emit({titleInput: this.titleInput, summaryInput: this.summaryInput, dueDateInput: this.dueDateInput});
    this.taskService.insertNewTask({titleInput: this.titleInput, summaryInput: this.summaryInput, dueDateInput: this.dueDateInput}, this.userId);
    this.cancelled.emit()
  }
}
