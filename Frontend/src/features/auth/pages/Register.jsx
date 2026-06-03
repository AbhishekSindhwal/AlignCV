import React from 'react'
import { useNavigate ,Link} from 'react-router';

const Register = () => {
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"  name="username" placeholder='Enter username' id="username" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email" placeholder='Enter email address' id="email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password" placeholder='Enter your password' id="password" />
                </div>

                <button className='button primary-button'>Register</button>
            </form>

            <p>Already have an account ? <Link to={/login}>Login</Link> </p>
        </div>
    </main>
  )
}

export default Register