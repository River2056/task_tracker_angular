import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const taskUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(taskUrl, task, httpOptions);
  }

  insertTask(task: Task): Observable<Task> {
    const taskUrl = `${this.apiUrl}/`;
    return this.http.post<Task>(taskUrl, task, httpOptions);
  }
}
