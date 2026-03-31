import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="flex mt-3 sticky top-0 z-10 bg-white p-3 justify-around items-center">
            <div >
               <p className='text-primary font-bold text-2xl'> Digit Tool</p>
            </div>
            <div>
            <ul className="menu font-semibold menu-horizontal px-1">
                <li> <a>Products</a></li>
                <li> <a>Featured</a> </li>
                <li> <a>Pricing</a> </li>
                <li> <a>Testimonial</a></li>
                <li> <a>FAQ</a></li>
            </ul>
            </div>
            <div className='space-x-4'>
                <button className='btn rounded-full'><span className='far fa-shopping-cart '></span> </button>
                <button className='btn btn-ghost rounded-full'>Login</button>
                <button className='btn btn-primary rounded-full'>  Get Started</button>
            </div>
        </div>
        </>
    );
};

export default Navbar;