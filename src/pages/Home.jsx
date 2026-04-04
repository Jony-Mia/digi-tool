import  { Suspense, useState } from 'react';
import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import Stat from '@/component/Stat';
import Footer from '@/component/Footer';
import Tools from '@/component/Tools';

import { Data ,Price} from '../API/API';
import Pricing from '../component/Pricing';
import Steps from '../component/Steps';

let priceData= Price()
let dataList =  Data();
const Home =() => {
    // let [purchase, setPurchase] = useState(false)
    let [cart, setCart] = useState([])
    
    return (
        <div className='font-manrope'>
            <Navbar cart={cart} />
            <Hero/>
            <div className='bg-primary m-auto'>
                <Stat/>
            </div>
            <Suspense fallback={<h2>Loading</h2>}>
                <Tools  cart={cart} setCart={setCart} dataList={dataList}/>
                
            <div className='m-auto container'>
                <Steps/>
            </div>
                <div className='m-auto mt-10 container'>
                      <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="md:text-4xl text-2xl font-bold">Simple, Transparent Pricing</h1>

                        <p className="py-6 md:w-full w-[80%] m-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime. </p>

                    </div>
                </div>
            </div>
                   <Pricing price={priceData}/>
                   <br />
                   <br />
                   <br />
                </div>
            </Suspense>
            <div className=' bg-neutral py-10 '>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;