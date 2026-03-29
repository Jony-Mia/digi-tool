import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="flex justify-around items-center">
            <div>
                Digit Tool
            </div>
            <div>
                  <ul className="menu menu-horizontal px-1">
                <li><a>Products</a></li>
                <li>
                   <a>Featured</a>
                </li>
                <li>
                   <a>Pricing</a>
                </li>
                <li><a>Testimonial</a></li>
                <li><a>FAQ</a></li>
                </ul>
            </div>
            <div>
                <button className='btn btn-ghost'><span className='far fa-shopping-cart '></span> Login</button>
                <button className='btn btn-primary rounded-full'>  Get Started</button>
            </div>
        </div>
        </>
    );
};

export default Navbar;