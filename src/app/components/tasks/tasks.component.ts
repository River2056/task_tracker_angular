import {Component, Input, OnInit} from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask: boolean = false;


  constructor(private taskService: TaskService, private uiService: UiService) {

  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    console.log(`task id: ${task.id}`);
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => task.id !== t.id));
  }

  toggleReminder(task: Task) {
    console.log(`toggle task reminder: ${task.id}`);
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addNewTask(task: Task) {
    console.log('tasks.addNewTask():');
    console.log('task: ', task);

    // insert to db.json
    this.taskService.insertTask(task).subscribe(task => this.tasks.unshift(task));
  }
}
