import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, removeTodo } from './TodoSlice';
import "./TodoApp.css";

export default function TodoApp() {
    // here i m create the useState for storing the state
    const [text,setText] =useState("");
    // here i m get the data from store by using useSelector
    const todos  = useSelector((state)=>state.todos);
    // here i m use useDispatch for send the actions to reducers for update the State
    const dispatch =useDispatch();

    // here i m create a functions handleTodos in which i call the methods addTodo
    const handleTodo=()=>{
        if(text.trim()){
            dispatch(addTodos({id:Date.now(),text}));
            // after the adding the text the input field field will be empty
            setText("");
        }
        
    }
  return (
    <div className='container'>
        <h1>This is My Simple TodoApp</h1>
        <div className='inputFiled'>
            <label htmlFor="todo">Enter Your Todo Here:</label>
            <input id='todo'  type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Todos" />
            {/* Create a button for adding the todos */}
            <button onClick={handleTodo}>AddTodos</button>
        </div>
        <div className="displayTodo">
            <ul>
                {/* here i m use the map() methods to traverse all the list items */}
               {
                todos.map((todo)=>(
                    <li key={todo.id} >
                        {todo.text} {" "}
                        {/* add the button for the remove the todos */}
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>RemoveTodo</button>
                    </li>
                ))
               }
            </ul>
        </div>
    </div>
  )
}
