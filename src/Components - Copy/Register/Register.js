import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

let Register = () => {

    let location = useLocation()
    let navigate = useNavigate();

    let [agree, setAgree] = useState(false);

    let [createUserWithEmailAndPassword,
        user, error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    }

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            toast('Resitration Successful')
            navigate(from, { replace: true });
        }
    }, [user]);

    let signUpToLogin = event => {
        navigate('/login')
    }

    let handleRegister = event => {
        event.preventDefault()
        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        if (agree) {
            createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className='row'>
            <div className="col-xl-8 mx-auto login-form">
                <h2 className='mb-60 text-center'>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="name" placeholder="name" required />
                    <input type="text" name="email" id="email" placeholder="email" required />
                    <input type="password" name="password" id="password" placeholder='password' required />
                    <button onClick={() => setAgree(!agree)} className='log-reg-btn' type='submit'>Register</button>
                </form>
                {errorMessage}
                <div className="sign-up-link mt-3">
                    <p className='text-center'>Already have an account? <span onClick={signUpToLogin} className='sign-up-route text-primary'><strong>Login</strong></span> Now</p>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;