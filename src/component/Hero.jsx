import React from 'react';
import banner from '@/assets/banner.png'
import Indicator from './Indicator';
const Hero = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content grid md:grid-cols-2 grid-cols-1 ">
                    <img
                        src={banner}
                        className="w-md "
                    />
                    <div className='row-start-1'>
                        <span className='bg-[#E1E7FF] py-1 px-2.5 w-fit block rounded-full'>
                            <Indicator />
                        </span>
                        <div className='mt-5'>
                            <h2 className='text-3xl md:text-6xl leading-10 font-semibold md:leading-18'>
                                Supercharge Your Digital Workflow
                            </h2>
                            <p className='leading-6 mt-4'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
                            </p>
                        </div>
                        <div className='space-x-2 mt-3'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className='btn btn-primary btn-outline  rounded-full'>
                                <span className='far fa-play'></span> Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;