import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,incrementByOne,decrementByOne } from '../redux/slices/CartSlice';
import OrderSummary from './OrderSummary';

const Cart = () => {
    const cart=useSelector((state) => state.cart.cart);
    const {totalQuantity, totalPrice } = useSelector((state) => state.cart);
    const dispatch=useDispatch()
    const displayText=cart.length!=1 || totalQuantity!=1 ? 'Items' : 'Item';

  return (
    <div className='bg-white'>
        {cart.length > 0 && (<><h3 className='text-2xl font-semibold mb-4 px-4 md:px-16 flex lg:px-24 mx-5'>CART</h3>
        <h3 className='text-xl font-semibold mb-4 px-4 md:px-16 flex lg:px-24 mx-5' >{`subtotal: Rs.${totalPrice} (${totalQuantity} ${displayText})`}</h3></>)}
        {cart.length > 0 ? 
        <div className='container mx-auto px-4 md:px-16 flex lg:px-24 pb-10 justify-between'>
            <div className='flex flex-col gap-5 mx-5 w-full md:w-2/3 border rounded-lg'>
             {cart.map((ele,index)=>{
            return(
              <div key={index} className='flex border-b-0 gap-6'>
                <img src={ele.image} className='size-40 object-contain rounded'/>
                <div className='flex flex-col py-3'>
                    <h3 className='text-lg font-semibold'>{ele.title.length > 35 ? (`${ele.title.slice(0, 30)}...`): ele.title}</h3>
                    <p className='text-blue-500'>Unit Price : Rs.{ele.unitPrice}</p>
              <p className='text-blue-800'>Price : Rs.{ele.price}</p>
              <div className='flex items-center gap-1'>
              <button className='rounded border-2 text-xl px-1' onClick={()=>dispatch(incrementByOne(ele.id))}>+</button>
              <p>{ele.quantity}</p>
              <button className='rounded border-2 text-xl px-1'onClick={()=>dispatch(decrementByOne(ele.id))}>-</button>
              </div>
              <button className='bg-red-600 px-8 py-1.5 mt-4 rounded text-white cursor-pointer' onClick={()=>dispatch(removeFromCart(ele.id))}>Remove</button>
                </div>
              </div>
            )
          })}
          </div>
          <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-60'>
          <OrderSummary/>
          </div>
        </div> : <div>
           <h1>Your cart is empty!</h1> 
        </div>}    
    </div>
     )
}
export default Cart
