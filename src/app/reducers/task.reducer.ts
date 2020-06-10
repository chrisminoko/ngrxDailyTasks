import { Action } from '@ngrx/store';
import { Task } from './../models/tasks.models';
import * as TaskActions from './../actions/task.action';


// Defining the initial state  or the defualt state 
const initalState: Task = {
    name: 'Default Task',
    
}

// this section is the actual reducer that decides what to do with the actions recived , we optionally bind it tot the inital state
export function reducer(state: Task[] = [initalState], action: TaskActions.Actions) {

    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];
        
        case TaskActions.REMOVE_TASK:
            const index=action.payload;
            return [...state.slice(0,index),...state.slice(index+1)]
            default:
            return state;
    }
}