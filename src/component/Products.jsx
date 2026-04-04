import { useState } from 'react';

const Products = ({ name, image, price, description, badge, points, time,list , cart, setCart}) => {
    let [purchase, setPurchase] = useState(false)
    function addCart(data){
        setCart([...cart,data]);
        setPurchase(true)
    }
    return (
        <div>
            <div className="card w-96 m-auto bg-base-100 shadow-sm">
                <div className="card-body relative">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className={`btn rounded-full block absolute right-5 top-5 h-auto`}>{badge}</div><br />
                    <div className=" ">
                        <h2 className="text-2xl my-1 font-bold">{name}</h2> 
                        <p className='font-semibold text-gray-400 my-2'>{description}</p>
                        <span className="text-xl font-bold">{price} <span className='text-sm'>/{time}</span> </span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        
                        {points.map((dataList,index)=><li key={index}><SVG/>{dataList}</li>)}
                    </ul>
                    <div className="mt-6">
                        <button onClick={()=>addCart(list)} disabled={purchase} className="btn btn-primary rounded-full btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export let SVG = ()=> <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;

export default Products;