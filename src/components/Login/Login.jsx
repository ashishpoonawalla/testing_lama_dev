import React, { useState } from 'react'
import "./login.css"

const Login = () => {
  const [error, seterror] = useState(false)
  return (
    <div className='container'>
            <form>
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>
                <button>Login</button>
                <span 
                className='error' 
                data-testid="error" 
                style={{visibility: error ? "visible": "hidden"}}
                >Something went wrong!</span>
            </form>
    </div>
  )
}

export default Login