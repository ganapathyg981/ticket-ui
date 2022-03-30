import React, { useState } from 'react'

function Login() {
  const[userName,setUserName]=useState('');
  const[password,setPassword]=useState('');
  const userNameHandler=(event)=>{
      setUserName(event.target.value);
  }
  const passwordHandler=(event)=>{
    setPassword(event.target.value);
  }

  const formHandler=(event)=>{
    event.preventDefault();
    console.log(userName+"  "+password);
  }
  return (
    <form style={{marginLeft:'40vw',marginTop:'40vh'}} onSubmit={formHandler}>
    <label>Username</label>
    <input value={userName} onChange={userNameHandler}></input>
    <div></div>
    <label>Password</label>
    <input value={password} onChange={passwordHandler} type='password' ></input>
    <div></div>
    <button type='submit'>Login</button>
    </form>
  )
}

export default Login