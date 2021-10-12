import { ADD_TASK, DELETE_TASK, DONE_TASK } from './taskTypes';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
})
export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
})
export const doneTask = id => ({
  type: DONE_TASK,
  payload: id
})