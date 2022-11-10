import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="logo-area">
                <Link to='/'><img src="" alt="" /></Link>
            </div>
            <nav>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;