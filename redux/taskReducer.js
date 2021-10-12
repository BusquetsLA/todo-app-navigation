import { ADD_TASK, DELETE_TASK, DONE_TASK } from './taskTypes';

const initialState = {
  tasks: [],
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks, {
            task: action.payload,
            done: false,
            id: Math.random().toString() // un id de morondanga pero sirve para el caso
          }
        ]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id != action.payload)
      } // filtra la task por id y la saca del state
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id !== action.payload) {
            return item
          } return {
            ...item,
            done: true
          }
        })
      } // filtra la task por id y le cambia el valor done a true
    default:
      return state;
  }
}
export default taskReducer;