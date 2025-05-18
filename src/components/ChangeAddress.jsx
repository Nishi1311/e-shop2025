import React,{useState} from 'react'

const ChangeAddress = ({setAddress,setOpenModal}) => {
    const [inputValue,setInputValue]=useState('')
    const handleChange=()=>{
        setAddress(inputValue)
        setOpenModal(false)
    }
   
  return (
    <div>
      <input type='text' placeholder='Enter new address' className='border p-2 w-full mb-4' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'onClick={()=>setOpenModal(false)}>Cancel</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={handleChange}>Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
