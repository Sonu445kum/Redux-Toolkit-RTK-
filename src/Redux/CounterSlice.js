import {createSlice} from "@reduxjs/toolkit";

// define the initialState
 export const initialState = {
    status:"idle",
    count:0
}

// Create A CounterSlice that have (state+actions)
 const counterSlice = createSlice({
    name:'counters',
    initialState,
    // create the reducers here for write the logic of the Counter
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset:(state)=>{
            state.count=0;
        },
    },

});

// export the  all methods which have i Mention above
export const {increment,decrement,reset} = counterSlice.actions;
// export by default the counterSlice with reducers
export default counterSlice.reducer;