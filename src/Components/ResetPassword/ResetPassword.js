import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ResetPassword = () => {
    const emailRef = useRef("");
    const [sendPasswordResetEmail, sending, error] =
        useSendPasswordResetEmail(auth);
    let errorMessage;

    if (sending) {
        return <Loading></Loading>;
    }

    if (error) {
        errorMessage = (
            <p className="text-danger text-center">Error: {error?.message}</p>
        );
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent! Please check your inbox");
        }
    };

    return (
        <div className='row'>
            <div className="col-xl-8 mx-auto login-form">
                <h1 className='mb-4 text-center'>Reset Your <span className='text-danger'>Password!</span></h1>
                <form>
                    <input className='mb-4' type="email" placeholder='Enter Your Email Address' name='email' id='email' ref={emailRef} required />
                    <button className='log-reg-btn' type='submit' onClick={handleResetPassword}>Login</button>
                </form>
                <span>{errorMessage}</span>
            </div>
        </div>
    );
};

export default ResetPassword;