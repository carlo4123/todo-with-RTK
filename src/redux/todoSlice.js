import { createSlice } from '@reduxjs/toolkit'

const todoReducer = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state,action) => {
      const newTodo = {
        id: state.length + 1,
        title: action.payload.title,
        completed: false
      }
      state.push(newTodo)
    },
    toggleComplete: (state,action) =>{
      const index =state.findIndex(
        (todo)=> todo.id === action.payload.id
        )
        state[index].completed = action.payload.completed
    },
    updateTodo: (state,action) =>{
      const index =state.findIndex(
        (todo)=> todo.id === action.payload.id
        )
        state[index].title = action.payload.title
    },
    deleteTodo: (state,action)=> {
      return state.filter((todo)=> todo.id !=action.payload.id)
    }
  }
})

export const { addTodo,toggleComplete,deleteTodo,updateTodo} = todoReducer.actions

export default todoReducer.reducer