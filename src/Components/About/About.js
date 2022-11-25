import React from 'react';
import './About.css';
import aboutImg from '../images/about.jpg'

const About = () => {
    return (
        <div>
            <div className="row mb-60">
                <div className="col-sm-12">
                    <h1 className='text-center fz-60 mb-60'>About</h1>
                </div>
                <div className="col-lg-6 mb-30">
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 mb-30">
                    <div className="about-text ">
                        <p>Shipping touches everything in the modern world. 90% of the commodities traded worldwide have at some point been transported by water. As one of the world’s largest shipping agencies, representing more than 3,500 Principals and handling over 101,000 jobs annually, GAC is alongside to ease the way for your vessels plying the world’s shipping lanes.</p>
                        <p>Ranar goes beyond the standard of ship agency services to provide solutions for a range of quality and trusted services tailored to the needs of each individual ship owner/operator. As your trusted ship agent, our expertise within the maritime industry ensures that operations are achieved in a timely and efficient manner, saving you time and money. We deliver personalized ship agency services to ensure prompt solutions and complete transparency in BD.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;