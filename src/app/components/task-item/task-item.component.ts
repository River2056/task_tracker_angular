import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../Task';
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input('task') task: Task;
  icon: IconDefinition = faTrashAlt;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onClickTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log('delete item:', task);
    this.onDeleteTask.emit(task);
  }

  onClick(task: Task) {
    console.log(`toggle reminder id: ${task.id}`);
    // task.reminder = !task.reminder;
    this.onClickTask.emit(task);
  }

}
