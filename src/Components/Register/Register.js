import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    let handleRegister = (event)=> {
        event.preventDefault()
    }
    return (
        <div className='row'>
        <div className="col-xl-8 mx-auto login-form">
            <h2 className='mb-60 text-center'>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="phone" placeholder='Phone Number' />
                <textarea type="text" name="" id="" placeholder='Address'></textarea>
                <input type="button" value='Register' />
                <p>Already Have an Account ? <Link to='/register'>Login Now </Link></p>
            </form>
        </div>
    </div>
    );
};

export default Register;