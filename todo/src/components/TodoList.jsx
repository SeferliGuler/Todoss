import React from 'react'
import '../App.css'
import Todo from './Todo'

function TodoList({todos, remove}) {

  return (
    <div>
     {
      todos.map((todo)=>(
        <Todo todo={todo} onremove={remove}/>
      ))
     }
      
    </div>
  )
}

export default TodoList
