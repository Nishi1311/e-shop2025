import React from 'react'
import { FaSearch,FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const cartProduct=useSelector((state) => state.cart.cart);
    console.log(cartProduct);

  return (
    <nav className='bg=white shadow-md'>
        <div className='container flex mx-auto py-4 justify-between items-center px-4 md:px-16 lg:px-24'>
            <div className='text-lg font-bold'>e-Shop</div>
            <div className='relative flex-1 mx-4'>
                <form>
                    <input type='text' placeholder='search products' className='w-full border py-2 px-4'/>
                    <FaSearch className='absolute top-3 right-3 text-red-500'/>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to='/cart'><FaShoppingCart className='text-lg relative'/>
                <span className='absolute bg-red-600 rounded-full top-0.5 px-1'>{cartProduct.length > 0 ? cartProduct.length : 0}</span>
                </Link>
<button className='hidden md:block'>Login | Register</button>
    <button className='hidden xs:block'>
        <FaUser/>
    </button>
    </div>
        </div>
      <div className='py-4 flex justify-center items-center space-x-10 text-sm font-bold'>
       <Link to='/'>Home</Link>
            <Link   to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
    </div>
    </nav>
  )
}
export default Navbar;