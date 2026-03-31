import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Stat from '../component/Stat';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className='bg-primary'>
            <Stat/>

            </div>
        </div>
    );
};

export default Home;