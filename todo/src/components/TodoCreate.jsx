import { useState } from 'react'
import React from 'react'
import '../App.css'

function TodoCreate({onCreateTodo}) {
  const [newTodo,setNewTodo] =useState('')

  const createTodo = ()=>{
    if(!newTodo) return
    const request={
      id:Math.floor(Math.random()*9999),
      content:newTodo
    }
    onCreateTodo(request)
  } 

  return (
    <div className='todo-create'>
      <input
      value={newTodo}
      onChange={(e)=> setNewTodo(e.target.value) }
      className='todo-giriniz'
       type="text" placeholder='todo giriniz'/>
      <button className='ekle' 
      onClick={createTodo}>Ekle</button>
    </div>
  )
}

export default TodoCreate
