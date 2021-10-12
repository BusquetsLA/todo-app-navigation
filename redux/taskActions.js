import { ADD_TASK, DELETE_TASK, DONE_TASK } from "./taskTypes";

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
})
export const deleteTask = task => ({
  type: DELETE_TASK,
  payload: task
})
export const doneTask = task => ({
  type: DONE_TASK,
  payload: task
})