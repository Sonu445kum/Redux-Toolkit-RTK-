import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, login, logout } from './AuthenticationsSlice';

export default function AuthDemo() {
    // create the useState for the storing the username and password for the user
    const [form,setForm] =useState({userName:"",password:""});
    // get userInfo from authSlice
    const {user,error,status} =useSelector((state)=>state.auth);
    // used Dispatch to send the actions to the reducers for update the state
    const dispatch =useDispatch();

    // create her a function to handlethe login form
    const handleLoing =()=>{
        dispatch(login(form))
    }
    // create her function to logout the form 
    const handleLogout =()=>{
        dispatch(logout());
    }

    // create a function handle the check auth
    const handleAuthentications =()=>{
        dispatch(checkAuth());
    }
  return (
    <div>
        <h1>AuthDemo</h1>
        {
            user ? (
               <div>
                <p>Welcome,{user.userName}</p>
                <button onClick={handleLogout}>Logout</button>
               </div>

            ):(
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input type="text" id='username'
                     value={form.userName} name='userName' 
                    onChange={(e)=>setForm({...form,userName:e.target.value})} 
                    placeholder='Enter here Your Name:' 
                    />
                    <br />
                    <label htmlFor="userpass">Password</label>
                    <input type="password"  id='userpass'
                     value={form.password} name='password'
                      onChange={(e)=>setForm({...form,password:e.target.value})}
                       placeholder='Enter your Password' 
                    />
                    <br />
                    <button onClick={handleLoing} disabled={status==="loading"}>
                        {status==="loading"  ? "Logging...in":"login"}
                    </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            )
        }
        <button onClick={handleAuthentications}>CheckAuth</button>
    </div>
  )
}
