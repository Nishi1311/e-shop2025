import React,{useState} from 'react'
import OrderSummary from '../components/OrderSummary'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleUp,} from 'react-icons/fa'

const Checkout = () => {
    const navigate=useNavigate()
    const [iconToggle,setIconToggle]=useState(false)

  return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-8 min-h-96'>
        <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
        <button onClick={()=>navigate('/cart')} className='cursor-pointer'>Back to cart</button>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
        <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'onClick={()=>setIconToggle(!iconToggle)}>
            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
            {iconToggle ? <FaAngleDown/> : <FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${iconToggle ? "" : 'hidden'}`}>
            <div>
                <label className="block text-gray-700">FirstName</label>
                <input className='w-full px-3 py-2 border' type='text'placeholder='enter your firstname' name="firstname"/>
            </div>
            <div> 
                <label className="block text-gray-700">LastName</label>
                <input className='w-full px-3 py-2 border' type='text'placeholder='enter your lastname'name="lastname"/>
            </div> 
            <div>
                <label className="block text-gray-700">Email</label>
                <input className='w-full px-3 py-2 border' type='email'placeholder='enter email'name="email"/>
            </div>
            <div>
                <label className="block text-gray-700">PhoneNo</label>
                <input className='w-full px-3 py-2 border' type='number'placeholder='enter phonenumber'name="phonenumber"/>
            </div>
            </div>
            </div>
        
      
    </div>
    <div>
        <OrderSummary/>
    </div>
    </div>
    </div>
  )
}

export default Checkout
