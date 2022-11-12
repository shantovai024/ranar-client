import React from 'react';
import notfound from '../images/not_found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='row'>
            <div className="col-xl-12 mb-60">
                <div className="not-found">
                    <img src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;