import React from 'react';
import user from "@/assets/user.png"
import rocket from "@/assets/rocket.png"
import packages from "@/assets/package.png"
const Steps = () => {
    return (
        <div className='m-auto container'>
            <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Get Started in 3 Steps</h1>

                        <p className="py-6">Start using premium digital tools in minutes, not hours.</p>

                    </div>
                </div>
               <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                     <BoxStep img={user} badge={1}/>
                     <BoxStep img={rocket} badge={2}/> 
                     <BoxStep img={packages} badge={3}/>
               </div>
        </div>
    );
};


export let BoxStep=({badge,img})=>{return(
    <>
        <div className='card shadow p-3'>
                <div className='flex justify-end'>
                    <button className='btn-primary btn rounded-full'>{badge}</button>
                </div>
                <div className=''>
                    <div className='m-auto bg-[#edf0fe] w-fit  rounded-full p-5'>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-center my-4 text-2xl font-bold'> Create an account </h2>
                        <p className='text-center p-3'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
        </div>
    </>
)}
export default Steps;