import React from 'react';

const Stat = () => {
    return (

        <div className='m-auto container grid grid-cols-3 py-10 text-white justify-center'>
            <div className="stats">
                <div className="stat text-center">
                    
                    <div className="stat-value text-4xl">50k+</div>
                    <div className="stat-desc text-2xl text-white">Active User</div>
                </div>
            </div>
            <div className="stats">
                <div className="stat text-center">
                    
                    <div className="stat-value text-4xl">200+</div>
                    <div className="stat-desc text-2xl text-white">Premium Tools</div>
                </div>
            </div>
            <div className="stats">
                <div className="stat text-center">
                    
                    <div className="stat-value text-4xl">4.9</div>
                    <div className="stat-desc text-2xl text-white">Ratings</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;