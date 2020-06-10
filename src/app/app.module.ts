import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {reducer} from './reducers/task.reducer';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tasks:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
