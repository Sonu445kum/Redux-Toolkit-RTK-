import React, { useReducer } from 'react'

// create the initialState
const initialState = {
    count: 0,
}
//create the reducers functions for define the types of Operations
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1
            }
        case "decrement":
            return {
                count: state.count - 1
            }
        case "reset":
            return {
                count: 0
            }
        default:
            return {
                state
            }

    }
}

export default function UseReducerCounter() {
    // create here useReducers Hooks
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>UseReducerCounter</h1>
            {/* Display the count Value */}
            <h3>Count Value:{state.count}</h3>
            {/*  Increment Button */}
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            {/* Decrement Button */}
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            {/* Reset Button */}
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}
