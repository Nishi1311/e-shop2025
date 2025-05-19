import React from 'react'
import { FaShippingFast,FaMoneyBillWave} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GrSecure } from "react-icons/gr";
import {MdDiscount} from "react-icons/md";

const InfoSection = () => {
    const infoItems=[{
        icon:<FaShippingFast/>,
        title:'Free Shipping',
        description:'Get your Orders Delivered with no extra cost'
    },
    {
        icon:<BiSupport/>,
        title:'Support 24/7',
        description:'We are here to assist you anytime'
    },
    {
        icon:<FaMoneyBillWave/>,
        title:'100% Money Back',
        description:'Full refund if you are not satisfied'
    },
    {
        icon:<GrSecure/>,
        title:'Payment Secure',
        description:'Your payment information is safe with us'
    },
    {
        icon:<MdDiscount/>,
        title:'Discount',
        description:'Enjoy the best prices on our products'
    },
]

  return (
    <div className='bg-white pt-12 pb-8'>
      <div className='container mx-auto flex gap-4'>
       {infoItems.map((ele,index)=>{
        return( 
            <div key={index} className='border flex flex-col text-center items-center p-4 rounded-lg shadow-md
            transform transition-transform duration-300 hover:scale-105 cursor-pointer basis-1/5
            '>
            <div className='text-red-600 text-3xl'>{ele.icon}</div>
            <h3 className='mt-4 text-xl font-semibold'>{ele.title}</h3>
            <p className='mt-2 text-grey-600'>{ele.description}</p>
            </div>
        )
      })}
      </div>
    </div>
  )
}
export default InfoSection;