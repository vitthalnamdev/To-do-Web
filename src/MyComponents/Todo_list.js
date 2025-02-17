import React, { Component } from 'react'
import Todo_Item from './Todo_Item'

const Todo_list = (props)=>{
    return (
      <div>
        {
         props.Todo.length===0?<h1 className='container'>No Todos to display</h1>:
          props.Todo.map(
            (todo) => {
              return <Todo_Item todo = {todo} key = {todo.sno} Delete = {props.OnDelete}/>
            }
          )     
        } 
      </div>
    )
  }



export default Todo_list
