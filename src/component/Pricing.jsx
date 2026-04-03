import React, { use } from 'react';

const Pricing = ({ price }) => {
    let pricing = use(price);
    console.log(pricing);

    return (
        <>
          <div className='grid gap-10 mt-20 md:grid-cols-3 grid-cols-1'>
              {
                pricing.map(priceData=><Data key={priceData.id}
                id={priceData.id}
                name={priceData.name}
                billing={priceData.billing}
                description={priceData.description}
                features={priceData.features}
                cta={priceData.cta}
                badge={priceData.badge}
                price={priceData.price}
                color={priceData.color?.background}
                // grad_1={priceData.color?.backgroundGradient[ "#7C3AED"]}
                // grad_2={priceData.color?.backgroundGradient[ "#9333EA"]}
                
            />)
            }
          </div>
          
        </>
    );
};

export let Data = ({ description,billing,color, name, badge, price, features }) => {
    console.log(color);
    
    return (
        <>
              <div className={`card sm:w-50 w-95 m-auto md:w-89 ${color? `bg-[${color}]`:'bg-linear-90 from-80% to-20% from-[#6a2cf8] text-white to-[#9314fa]'}  shadow indicator`}>
                <div className="card-body  ">
                    {badge  && <span className="badge indicator-top indicator-center badge-xl indicator-item rounded-full badge-warning"> {badge}</span>}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <h2 className="text-sm my-2 font-normal">{description}</h2>
                        <span className="text-xl font-bold">${price}<span className='text-sm text-gray-400'>/{billing}</span></span>
                    </div>
                    <ul className="mt-4 flex flex-col gap-2 text-xs">
                      {
                        features.map((list,index)=>(
                        <li className='font-semibold' key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{list}</span>
                        </li>
                        ))
                      }
                    </ul>
                    <div className="mt-6">
                        <button className={`btn ${color?'btn-primary':'btn-base-100'} rounded-full btn-block`}>Get Started</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Pricing;