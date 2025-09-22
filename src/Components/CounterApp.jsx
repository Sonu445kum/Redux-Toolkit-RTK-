import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment, reset } from '../Redux/CounterSlice';

export default function CounterApp() {
    // here i m use useSelector for the reading the data which comes from the store
    const selector = useSelector((state)=>state.counter.count);
    // here i m use the dispatch for sending the action to the reducers for the update state
    const dispatch = useDispatch();
  return (
    <div>
        <h1>This is the Basic Operation which have increment,decrement or Reset the Value</h1>
        <h2>Count Value:{selector}</h2>
        {/* here i m create the three button */}
        <button onClick={()=>dispatch(increment())}>Incrment</button>
        <button onClick={()=>dispatch(decrement())}>Decrrment</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
