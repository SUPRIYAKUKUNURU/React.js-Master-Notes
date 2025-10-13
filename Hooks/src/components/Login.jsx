import React from 'react'
import "./Login.css"
import{useState} from 'react';
function Login() {
  const [username, setusername] = useState(" ");
  const [password,setPassword] = useState(" ");

  const handleUsername=(e)=>{
  setusername(e.target.value)
  }
  console.log("Username :" ,username);
  console.log("Password :",password);
  return (
    <div>
            <form className="form mx-auto  mt-5">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email" onChange={handleUsername}/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
         <button type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <a href="">Sign up</a>
      </p>
   </form>

    </div>
  )
}

export default Login