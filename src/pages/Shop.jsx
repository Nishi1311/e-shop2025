import ProductCard from '../components/ProductCard'
import useProduct from '../customHook/useProduct'

const Shop = () => { 
  const products=useProduct();
  
  return (
      <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='flex gap-16 cursor-pointer flex-wrap justify-between'>
          {products.products.map((ele,index)=>{
            return(
              <div key={index} className='basis-1/5'>
              <ProductCard product={ele}/>
              </div>
            )
          })}
        </div>
      </div>
  )
}
export default Shop
