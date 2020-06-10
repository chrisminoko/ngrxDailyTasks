import{Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Task} from './../models/tasks.models' ;




// Defining the type of actions to perfom 
export const ADD_TASK = '[TASK]Add';
export const REMOVE_TASK = '[TASK]Remove';


// We create classes for all the actions and constructors  that will allow us to pass a pay load
export class AddTask implements Action{
        readonly type= ADD_TASK;
        
        constructor(public payload:Task) { }
}

export class RemoveTask implements Action{
    readonly type= REMOVE_TASK;
   
    constructor(public payload:number) {}
}



//exporting all the action classes for use within the reducer 
export type Actions = AddTask|RemoveTask        