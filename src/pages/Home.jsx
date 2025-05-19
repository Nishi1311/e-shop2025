import { categories } from '../assets/mockData'
import InfoSection from '../components/infosection'
import CategoriesSection from '../components/CategoriesSection'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'
import useProduct from '../customHook/useProduct'

const Home = () => {
  const products=useProduct();

  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-14'>
<div className='w-full md:w-3/12'>
<div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
<ul className='space-y-4 bg-gray-100 p-3'>
  {categories.map((ele,index)=>{
    return(
      <li key={index} className='flex items-center text-sm font-medium'>{ele}</li>
    )
  })}
</ul>
      </div>
      <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
        <img src="https://www.kindpng.com/picc/m/248-2484479_ecommerce-website-development-services-ecom-website-hd-png.png" alt="" className='h-full w-full'/>
        <div className='absolute top-16 space-y-3'>
          <h1 className='text-3xl font-bold'>Welcome to E-shop</h1>
          <h3 className='text-xl mt-2.5 font-bold text-gray-800'>Millions Products</h3>
          <button className='bg-red-600 px-8 py-1.5 mt-4 rounded text-white cursor-pointer hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
        </div>
      </div>
      </div>
      <InfoSection/>
      <CategoriesSection/>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='flex gap-6 cursor-pointer'>
          {products.products.slice(0,3).map((ele,index)=>{
            return(
              <div key={index} className='basis-1/3'>
              <ProductCard product={ele}/>
              </div>
            )
          })}
        </div>
      </div>
       <Shop/>
    </div>
  )
}
export default Home
