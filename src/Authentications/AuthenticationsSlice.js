import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";


// fake api to simulate the login
const  fakeLoginApi =async(credentials)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(credentials.username === "Admin" && credentials.password === "123admin"){
                resolve({username:"admin",token:"fake_jwt_token_123"});
            }else{
                reject(new Error("Invalid the Username And Password"))
            }

        },1000)
    })
};

//async thunk for the login
export const login =createAsyncThunk(
    "async/login",
    async(credentials,{isRejectedWithValue})=>{
        try {
            const user = await fakeLoginApi(credentials);
            localStorage("user",JSON.stringify(user)); // save the user
            return user;
        } catch (error) {
            return isRejectedWithValue(error.message);
            
        }
    }
);
//sync thunk for checking the authentications(from the localstorage);
export const checkAuth =createAsyncThunk("auth/checkAuth",async()=>{
    const user =localStorage.getItem("user");
    return user ? JSON.parse(user):null;
});

// here i m creating the auth slice
const authSlice =createSlice({
    name:'auth',
    initialState:{
        user:null,
        status:"idle",
        error:null
    },
    // create the reducers
    reducers:{
        logout:(state)=>{
            state.user=null;
            localStorage.removeItem("user");
        }
    },
    //extraReducers :extraReducers are used when the action are define outside slice
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending,(state,action)=>{
            state.user="locading";
            state.error=null;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.user="Success";
            state.user=action.payload;
        })
        .addCase(login.rejected,(state,action)=>{
            state.user="failed";
            state.error=action.payload;
        })
        //check for authentications
        .addCase(checkAuth.fulfilled,(state,action)=>{
            state.user =action.payload;
        })
    }
});
// export the actions
export const {logout} =authSlice.actions;
// export the reducers
export default authSlice.reducer;
