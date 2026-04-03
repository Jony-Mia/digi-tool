const Cart = ({ cart, setCart}) => {
    let calc = cart.map(data=>data.price)
    
    const total = calc.reduce((acc, item) => {
    return acc + eval(item);
  }, 0);
  
    return (
       <>
        {cart.length?  <div className='m-auto w-full container px-5'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
            <div>
                {cart.map((d) => (
                    <CardList key={d.id} setCart={setCart} data={cart} id={d.id} img={d.img} name={d.name} price={d.price} />
                ))}
            </div>
            <div className="w-full ">
                <div className="flex my-3 justify-between">
                    <p className="font-bold">Total</p>
                    <p className="font-bold text-lg">${total}</p>
                </div>
                <div className="w-full mt-5">
                    <button className="btn-lg rounded-full w-full btn btn-primary">Proceed to Checkout</button>
                </div>
            </div>
        </div>: <p className="text-3xl font-bold">Your car is empty</p>}
       </>
    );
};
export let CardList = ({setCart,data, name, id, price, img }) =>{
    function del(id){
        let remove = data.filter(list => list.id !== id)
        setCart(remove);
    }
    return (
    <div key={id} className="flex my-5 shadow p-5 font-medium bg-base-200 rounded-2xl items-center justify-between">
        <div className="flex items-center gap-6">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p className="font-semibold text-gray-400">${price}</p>
            </div>
        </div>
        <div>
            <button onClick={()=>del(id)} className="text-error font-medium"> Remove</button>
        </div>
    </div>
)
}
export default Cart;