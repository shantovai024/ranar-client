import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css'
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SocialLogin = () => {

    let [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

    let location = useLocation()
    let navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    if (user) {
        toast('SignIn with Google Successfully')
        navigate(from, { replace: true });
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className="text-danger">{error?.message}</p>;
    }

    return (
        <div className='row'>
            <div className="col-xl-6 offset-xl-3">
                <h5 className='text-center'>Or Login with</h5>
                {errorMessage}
                <div className="google-auth-wrapper">
                    <button onClick={() => signInWithGoogle()} className="google-btn-bg d-flex justify-content-center">
                        <span className='logo-icon'> <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt='' /> </span>
                        <span className='logo-text mt-2 ms-2'> Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;