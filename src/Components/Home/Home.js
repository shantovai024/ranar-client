import React from 'react';
import About from '../About/About';
import AddProducts from '../AddProducts/AddProducts';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Facts from '../Facts/Facts';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AddProducts></AddProducts>
            <Products></Products>
            <About></About>
            <Facts></Facts>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;