import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Facts from '../Facts/Facts';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Facts></Facts>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;