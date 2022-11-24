import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <>
            <div className='row mb-50'>
                <div className="col-xl-3">
                    <div className="logo-area">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="col-xl-9 d-flex justify-content-end align-items-center">
                    <nav className='menu-area'>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                        {user && (<>
                            <Link to='/allproducts'>Manage Products</Link>
                            <Link to='/addproducts'>Add A Product</Link>
                        </>)}
                        {user ? (<Link to='/login' onClick={() => signOut(auth)}>Logout</Link>) : (<Link to='/login'>Login</Link>)}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;