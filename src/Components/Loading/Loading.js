import React from 'react';
import './Loading.css'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container load-parent'>
            <div className="load">
                <Spinner animation="border" variant="success" />
                <h2 className='mt-4 text-success'>Loading ...</h2>
            </div>
        </div>
    );
};

export default Loading;