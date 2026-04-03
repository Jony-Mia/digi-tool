import { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';


const Tools = ({ dataList, cart, setCart}) => {
    let [activeBTN,setActiveBTN] = useState(true)
    let data = use(dataList);
    let [calculat, setCalculate] = useState([]);
    
    return (
        <div className=' my-10'>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>

                        <p className="py-6"> Choose from our curated collection of premium digital products designedto boost your productivity and creativity. </p>

                       <div className=' shadow-sm shadow-primary/20  w-fit m-auto rounded-full p-1'>
                         <button onClick={()=>setActiveBTN(true)} className={`btn btn-primary ${activeBTN ? "":"btn-outline"} rounded-full`}>Products</button>
                         <button onClick={()=>setActiveBTN(false)} className={`btn indicator btn-primary ${activeBTN ? "btn-outline":""} ms-3 rounded-full`}>  Cart

                            <p className='indicator-item bg-error h-5 w-5 rounded-full flex justify-center text-white items-center'>{cart.length}</p> 
                        </button>
                       </div>
                    </div>
                </div>
            </div>
            <div className='m-auto  container'>
                
            { activeBTN ? <div className='grid md:grid-cols-3 grid-cols-1 gap-4 justify-center'> {
            data.map(list=>{
               return(
                <Products 
                setCart={setCart}
                cart={cart}
                image={list.img}
                description={list.description} 
                points={list.features} 
                badge={list.badge} 
                price={list.price} 
                time={list.subscription_duration} 
                name={list.name} 
                list={list}
                key={list.id} 
                /> 
            )
        }) } </div> : <div className='m-auto container flex justify-center p-5 rounded-2xl shadow w-full'>
            
                <Cart 
                calculat={calculat} 
                setCart={setCart} 
                cart={cart}
                /> 
            </div>
        }
       
            </div>
        </div>
    );
};

export default Tools;