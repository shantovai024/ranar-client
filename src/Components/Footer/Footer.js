import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    let handleFooterForm = (event) => {
        event.preventDefault()
    }
    return (
        <div className="footer-area pt-50 pb-30 bg-footer">
            <div className='row'>
                <div className="col-xl-6">
                    <div className="footer-left">
                        <h3>Get in Touch</h3>
                        <p>Ranar inc.</p>
                        <p>9870 St Vincent Place, Glasgow, DC 45 Fr 45</p>
                        <p><FontAwesomeIcon icon={faPhone} /> + 1 800 559 6580 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> mail@companyname.com</p>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="footer-right">
                        <h3>Newsletter Sign Up</h3>
                        <p>Sign up to our newsletter and get exclusive offers and news you wont find anywhere else straight to your inbox!</p>
                        <form onSubmit={handleFooterForm}>
                            <input type="email" placeholder='Enter your Email Address' /> <br />
                            <button>Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;