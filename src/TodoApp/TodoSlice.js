import { createSlice } from "@reduxjs/toolkit";


// create here todoSlice
const todoSlice =createSlice({
    name:'todo',
    initialState:[], // here the initialState is empty
    reducers:{
        // create a functions for addTodo
        addTodos:(state,action)=>{
            // here i m using push method for adding the todo
            state.push(action.payload); // action.payload ={id,text}
        },
        removeTodo:(state,action)=>{
            return state.filter((todo)=>todo.id !==action.payload); // here the action.payload is equal to id 
            // where user want to remove the todo
        },
    },
});

// here i m export all the method like as addTodos,removeTodo
export const {addTodos,removeTodo} =todoSlice.actions;
// here i m export todoSlice
export default todoSlice.reducer;