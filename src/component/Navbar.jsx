import React from 'react';

const Navbar = ({ cart }) => {
    return (
        <>
            {/* Header For Large Device */}
            <div className=" mt-3 sticky top-0 z-10 bg-white p-3 flex-wrap md:flex hidden justify-around items-center">
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
                    <button className='btn rounded-full indicator '>
                        <span className='far fa-shopping-cart '></span>
                        <p className='indicator-item bg-error h-5 w-5 rounded-full flex justify-center text-white items-center'>{cart.length}</p>

                    </button>
                    <button className='btn btn-ghost rounded-full'>Login</button>
                    <button className='btn btn-primary rounded-full'> Get Started</button>
                </div>
            </div>

            {/* Header For Mobiles */}
            <div className='container'>

            <div className="navbar p-3 md:hidden bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <div
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <button className='btn btn-primary'>Get  Started</button>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">DigiTool</a>
                </div>
                <div className="navbar-end">
                    <button className='btn rounded-full indicator '>
                        <span className='far fa-shopping-cart '></span>
                        <p className='indicator-item bg-error h-5 w-5 rounded-full flex justify-center text-white items-center'>{cart.length}</p>
                    </button>
                    
                </div>
            </div>
            </div>

        </>
    );
};

export default Navbar;