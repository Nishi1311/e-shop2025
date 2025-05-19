import React from 'react'
import { addToCart } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';

const ProductCard = ({product}) => {
  const dispatch=useDispatch();
  const handleCart=(e,product)=>{
e.preventDefault();
dispatch(addToCart(product))
  }
  const title=product.title.length > 45 ? (`${product.title.slice(0, 40)}...`): product.title;

  return (
    <div className='bg=white p-4 shadow rounded border cursor-pointer h-auto'>
      <img src={product.image} className='w-full h-48 object-contain mb-4'/>
      <h3 className='text-lg font-semibold'>{title}</h3>
     <p className='text-gray-500'>Rs.{product.price}</p>
      <button className='bg-red-500 text-white font-bold text-xl hover:bg-blue-500 px-8 py-1.5 mt-4 rounded cursor-pointer'onClick={(e)=>handleCart(e,product)}>AddToCart</button>
    </div>
  )
}
export default ProductCard;