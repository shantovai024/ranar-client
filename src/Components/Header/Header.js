import React from 'react';
import './Header.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div classNameName='row mb-50'>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" ><img src={logo} alt="" /></NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>

              <li className="nav-item">
                {user && (<>
                  <NavLink className="nav-link" to='/allproducts'>Manage Products</NavLink>
                </>)}
              </li>

              <li className="nav-item">
                {user && (<>
                  <NavLink className="nav-link" to='/addproducts'>Add A Product</NavLink>
                </>)}
              </li>

              <li className="nav-item">
                {user ? (<NavLink className="nav-link" to='/login' onClick={() => signOut(auth)}>Logout</NavLink>) : (<NavLink className="nav-link" to='/login'>Login</NavLink>)}
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;