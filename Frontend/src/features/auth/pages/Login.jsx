import React from 'react'
import "../auth.form.scss"
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'



const Login = () => {
    const {loading,handleLogin}= useAuth();

    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" placeholder='Enter email address' id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password" placeholder='Enter your password' id="password" />
                </div>

                <button className='button primary-button'>Login</button>
            </form>
              <p>Didn't have an account ? <Link to={"/register"}>Register</Link>  </p> 
        </div>
    </main>
  )
}

export default Login    