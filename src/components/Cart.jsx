// import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,incrementByOne,decrementByOne } from '../redux/slices/CartSlice';
// import Modal from './Modal';
// import ChangeAddress from './ChangeAddress';
// import { useNavigate } from 'react-router-dom';
import OrderSummary from './OrderSummary';

const Cart = () => {
    const cart=useSelector((state) => state.cart.cart);
    // const {totalQuantity, totalPrice } = useSelector((state) => state.cart);

    const dispatch=useDispatch()
    // const [address, setAddress]=useState(['2117 New Castle, CT,Davenport,52807'])
    // const [openModal,setOpenModal]=useState(false)
    // const navigate=useNavigate()
  return (
    <div className='bg-white'>
        <h1 className='text-2xl font-semibold mb-4'>Cart</h1>
        {cart.length > 0 ? <div className='container mx-auto px-4 md:px-16 flex lg:px-24 py-10  justify-between'>
            <div className='flex flex-col gap-5 mx-5 w-full'>
            {cart.map((ele,index)=>{
            return(
              <div key={index} className='flex border-b-0'>
                <img src={ele.image} className='size-16 object-contain rounded'/>
                <div className='flex flex-col'>
                    <h3 className='text-lg font-semibold'>{ele.title.length > 35 ? (`${ele.title.slice(0, 30)}...`): ele.title}</h3>
              <p className='text-gray-500'>Price : Rs.{ele.price}</p>
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
          <OrderSummary/>
        </div> : <div>
           <h1>Your cart is empty!</h1> 
        </div>}
        
    </div>
    
  )
}

export default Cart
