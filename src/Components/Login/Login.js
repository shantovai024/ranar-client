import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    let handleLogin = (event)=> {
        event.preventDefault()
    }
    return (
        <div className='row'>
            <div className="col-xl-8 mx-auto login-form">
                <h2 className='mb-60 text-center'>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="button" value='Login' />
                    <p>Don't Have an Account ? <Link to='/register'>Register Now </Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;