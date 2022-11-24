import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import './Login.css'
import { toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';


let Login = () => {

    let [signInWithEmailAndPassword,
        user,
        error,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    if (location.state?.from) {
        navigate(location.state.from)
    }

    let loginToSignUp = (event) => {
        navigate('/register')
    }

    let resetpassword = (event) => {
        navigate('/resetpassword')
    }

    useEffect(() => {
        if (user) {
            toast("Login Successfully");
            navigate(from, { replace: true });
        }
    }, [user]);

    if (loading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="text-danger">Error: {error?.message}</p>;
    }

    let handleLogin = async (event) => {
        event.preventDefault()
        let email = event.target.email.value;
        let password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);

        navigate(from, { replace: true });
    }

    return (
        <div className='row'>
            <div className="col-xl-8 mx-auto login-form">
                <h2 className='mb-60 text-center'>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder='Email' name='email' id='email' />
                    <input type="password" placeholder='Password' name='password' id='password' />
                    <button className='log-reg-btn' type='submit'>Login</button>
                </form>
                <span className='text-center'>{errorMessage}</span>

                <div className="sign-up-link mt-3">
                    <p className='text-center'>Forget Your Password? <span onClick={resetpassword} className='sign-up-route text-danger'><strong>Reset</strong></span> Now</p>
                </div>
                <div className="sign-up-link mt-3">
                    <p className='text-center'>Don't have an account? <span onClick={loginToSignUp} className='sign-up-route text-primary'><strong>Register</strong></span> Now</p>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;