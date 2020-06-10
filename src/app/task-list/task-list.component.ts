import { Component, OnInit } from '@angular/core';
import * as TasksActions from './../actions/task.action';
import { Store } from '@ngrx/store';
import { Task } from './../models/tasks.models';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  task:Observable<Task[]>;
  constructor(private store:Store<AppState>) {
    this.task=store.select('tasks');
   }

  ngOnInit(): void {
  }
  delTutorial(index) {
    this.store.dispatch(new TasksActions.RemoveTask(index) )
    console.log('deleted');
  }
  addTutorial(name){
    this.store.dispatch(new TasksActions.AddTask({name:name}))
  }
}
