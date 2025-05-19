import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";

const Footer = () => {

  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto flex flex-col gap-8' >
        <div className='flex justify-between gap-5' >
        <div>
          <h1 className='text-xl font-semibold'>e-Shop</h1>
          <p className='mt-4'>Your one-stop shop for all needs</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow Us</h4>
          <div className='flex space-x-4 mt-4'>
<a href=""><FaFacebook/></a>
<a href=""><FaInstagram/></a>
<a href=""><FaTwitter/></a>
<a href=""><FaLinkedin/></a>
          </div>
          <form className='flex items-center justify-center mt-8 gap-2'>
            <input type='email' placeholder='Your email' className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600'/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='flex justify-between border-t border-gray-700 pt-4'>
        <p>@2025 e-shop.All rights reserved.</p>
        <div className='flex gap-3'>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
