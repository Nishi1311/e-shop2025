const ShippingAddress = () => {

  return (
    <>
            <div>
                <label className="block text-gray-700">Address</label>
                <input className='w-full px-3 py-2 border' type='text'placeholder='enter your full address' name="addresss"/>
            </div>
            <div> 
                <label className="block text-gray-700">City</label>
                <input className='w-full px-3 py-2 border' type='text'placeholder='enter your city name'name="city"/>
            </div> 
            <div>
                <label className="block text-gray-700">State</label>
                <input className='w-full px-3 py-2 border' type='text'placeholder='enter state'name="state"/>
            </div>
            <div>
                <label className="block text-gray-700">Zip Code</label>
                <input className='w-full px-3 py-2 border' type='number'placeholder='enter Zipcode'name="zipcode"/>
            </div>
            </>  
  )
}
export default ShippingAddress;