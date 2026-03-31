import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Stat from '../component/Stat';
import Footer from '../component/Footer';
import Tools from '../component/Tools';

const Home = () => {
    return (
        <div className='font-manrope'>
            <Navbar/>
            <Hero/>
            <div className='bg-primary'>
                <Stat/>
            </div>
            <Tools/>

            <div className=' bg-neutral '>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;