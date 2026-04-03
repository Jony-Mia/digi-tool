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
                <div className='m-auto container'>
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