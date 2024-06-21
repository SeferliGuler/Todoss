import { useState } from 'react'
import './App.css'
import TodoCreate  from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos] =useState([])

  const createTodo = (newTodo)=>{
    setTodos([...todos,newTodo])
  }

  const remove = (todoId)=>{
  const rem=  todos.filter((todo)=>todo.id!==todoId)
  setTodos([...rem])
  }
  
  return (
    <div className='App'>
      <TodoCreate onCreateTodo={createTodo}/>
      <TodoList todos={todos} remove={remove}/>
    </div>
  )
}

export default App
