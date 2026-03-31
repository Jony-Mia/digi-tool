import React from 'react';

const Stat = () => {
    return (
        
        <div className='m-auto container grid grid-cols-3  justify-center gap-70'>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
};

export default Stat;