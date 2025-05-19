import React,{useState} from 'react'
import OrderSummary from '../components/OrderSummary'
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleUp,} from 'react-icons/fa'
import ShippingAddress from '../components/ShippingAddress'

const Checkout = () => {
    const navigate=useNavigate()
    const [iconToggleBilling,setIconToggleBilling]=useState(true)
    const [iconToggleShipping,setIconToggleShipping]=useState(false)
    const [iconTogglePaymentMethod,setIconTogglePaymentMethod]=useState(false)
    const [selectedPayment, setSelectedPayment] = useState('cod')
   
     return (
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-8 min-h-96'>
        <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
        <button onClick={()=>navigate('/cart')} className='cursor-pointer'>Back to cart</button>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
        <div className='md:w-2/3'>
        <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'onClick={()=>setIconToggleBilling(!iconToggleBilling)}>
            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
            {iconToggleBilling ? <FaAngleDown/> : <FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${iconToggleBilling ? "" : 'hidden'}`}>
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
            <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'onClick={()=>setIconToggleShipping(!iconToggleShipping)}>
            <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
            {iconToggleShipping ? <FaAngleDown/> : <FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${iconToggleShipping ? "" : 'hidden'}`}>
            <ShippingAddress/>
            </div>
            </div> 
             <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'onClick={()=>setIconTogglePaymentMethod(!iconTogglePaymentMethod)}>
            <h3 className='text-lg font-semibold mb-2'>Payment Methods</h3>
            {iconTogglePaymentMethod ? <FaAngleDown/> : <FaAngleUp/>}
            </div>
            <div className={`space-y-4 ${iconTogglePaymentMethod ? "" : 'hidden'}`}>
                
                    <div className='flex items-center mb-2'>
                        <input
            type='radio'
            value='cod'
            checked={selectedPayment === 'cod'}
            onChange={() => setSelectedPayment('cod')}
          />
          <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                    </div>
                    <div className='flex items-center mb-2'>
         <input
            type='radio'
            value='debit'
            checked={selectedPayment === 'debit'}
            onChange={() => setSelectedPayment('debit')}
          />
          <label className='block text-gray-700 ml-2'>Debit Card</label>
          </div>
            {selectedPayment === 'debit' && (
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                    <h3 className='text-xl font-semibold mb-4'>Debit card Information</h3>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            card Number
                        </label>
                        <input type='number' placeholder='Enter card number' className='border p-2  w-full rounded'/>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            card Holder Name
                        </label>
                        <input type='text'placeholder='enter card holder name' className='border p-2  w-full rounded'/>
                    </div>
                    <div className='flex justify-between mb-4'>
                    <div className='w-1/2 mr-2'>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            CVV
                        </label>
                        <input type='number' placeholder='enter cvv' className='border p-2  w-full rounded'/>
                    </div>
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2'>
                            Valid UpTo
                        </label>
                        <input type='number' placeholder='enter expiry date' className='border p-2  w-full rounded'/>
                    </div>
                    </div>
                </div>
            )}
            </div>
            </div>  
    </div>
    <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-72'>
        <OrderSummary/>
    </div>
    </div>
    </div>
  )
}
export default Checkout
