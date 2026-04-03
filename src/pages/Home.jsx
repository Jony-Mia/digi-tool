import  { Suspense, useState } from 'react';
import Navbar from '@/component/Navbar';
import Hero from '@/component/Hero';
import Stat from '@/component/Stat';
import Footer from '@/component/Footer';
import Tools from '@/component/Tools';

import { Data ,Price} from '../API/API';
import Pricing from '../component/Pricing';

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
                <div className='m-auto mt-10 container'>
                      <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Pricing Digital Tools</h1>

                        <p className="py-6"> Choose from our curated collection of premium digital products designedto boost your productivity and creativity. </p>

                    </div>
                </div>
            </div>
                   <Pricing price={priceData}/>
                   <br />
                   <br />
                   <br />
                </div>
            </Suspense>
            <div className=' bg-neutral '>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;