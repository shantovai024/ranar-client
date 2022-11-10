import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='row mb-20'>
            <div className="col-xl-3">
                <div className="logo-area">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="col-xl-9 d-flex justify-content-end align-items-center">
                <nav className='menu-area'>
                    <Link to='/about'>About</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;