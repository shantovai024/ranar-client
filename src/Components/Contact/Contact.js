import React from 'react';
import './Contact.css'
import contact from '../images/contact.jpeg'

const Contact = () => {
    let handleContactForm = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <div className="row">
                <div className="col-xl-12">
                    <h2 className='contact-title mb-60'>Contact Us</h2>
                </div>
                <div className="col-xl-6">
                    <div className="contact-img">
                        <img src={contact} alt="" />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="contact-form">
                        <form onSubmit={handleContactForm}>
                            <input type="text" placeholder='Your Name *' />
                            <input type="email" placeholder='Your Email *' />
                            <textarea type="text" placeholder='Message *' />
                            <input type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;