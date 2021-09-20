import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from "../../services/task.service";
import { Task } from '../../Task';
import {Subscription} from "rxjs";
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  reminder: boolean = false;
  @Output('addNewTask') addTask: EventEmitter<Task> = new EventEmitter<Task>();
  subscription: Subscription;
  showAddTask: boolean;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // clear input after every instance
    this.text = '';
    this.day = '';
    this.reminder = false;
    this.addTask.emit(newTask);
  }

}
