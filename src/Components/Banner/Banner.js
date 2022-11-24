import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bg-banner mb-40' >
            <div className="row">
                <div className="col-sm-6 banner">
                    <div className="banner-text mx-3">
                        <h2>OCEAN FREIGHTS</h2>
                        <h3>Global Solutions For Your Business </h3>
                        <p>We are the world’s largest shipping agencies, representing more than 3,500 Principals and handling over 101,000 jobs annually.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;