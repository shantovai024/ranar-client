import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const VerifyEmail = () => {
    const [sendEmailVerification, sending,] =
        useSendEmailVerification(auth);

    if (sending) {
        return <Loading></Loading>;
    }

    return (
        <div className='row'>
            <div className="col-xl-8 text-center offset-xl-2">
                <h2 className='mb-4 text-danger'>This Email Address is not verified</h2>
                <h4 className='mb-4'>Please check your Email & Verify.</h4>
                <button className='update' onClick={() => {
                    sendEmailVerification()
                    toast("Email Sent!")
                }}> Send Email Again </button>
            </div>
        </div>
    );
};

export default VerifyEmail;