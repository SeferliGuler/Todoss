import React, { useState } from 'react'
import '../App.css'
import { CiCreditCard1 } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";

function Todo({todo, onremove}) {

  const [edit,setEdit] =useState(false)
  const [newTodo,setNewTodo] = useState(todo.content)

  const remove =()=>{
    onremove(todo.id)
  }  

  return (
    <div className='todo-parent'>
    <div className='todo'>
      <div className='todo-input'>
       {
        edit ? <input className='input' type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/> : todo.content
       }
      </div>
        <div>
        <CiCircleRemove  onClick={remove} className='icon'/>
        {
          edit ?  <FaCheck className='icon'/> :  <CiCreditCard1 onClick={()=> setEdit(true)} className='icon'/>
        }
        </div>
    </div>
    </div>
  )
}

export default Todo
