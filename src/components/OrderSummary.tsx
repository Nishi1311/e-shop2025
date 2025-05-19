import {useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Modal from './Modal';
import ChangeAddress from './ChangeAddress';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const [address, setAddress]=useState(['2117 New Castle, CT,Davenport,52807'])
    const [openModal,setOpenModal]=useState(false)
    const navigate=useNavigate();
    const location = useLocation();
     const isCheckoutPage = location.pathname === '/checkout';
    const {totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <>
<div>
                   <h3 className='font-bold text-lg text-center mb-5'>order summary</h3>
                   <div className='flex justify-between mb-5 border-b pb-1'>
                    <span className='text-sm font-bold'>Total Items:</span>
                    <span className='text-xs font-semibold'>{totalQuantity}</span>
                   </div>
                   <div className=' flex justify-between mb-4'>
                    <span className='text-sm font-bold'>Total Price:
                    </span>
                    <span className='text-xs font-semibold'>{totalPrice}</span>
                   </div>
                   { isCheckoutPage && (<><div className='flex justify-between items-center mb-5 border-b pb-1'>
                    <span className='text-sm font-bold'>Ships to:</span>
                   <span className='text-xs font-semibold'>{address}</span>
                   </div>
                   <button className='text-blue-500 hover:underline mt-1 ml-2 ' onClick={()=>setOpenModal(true)}>change Addresss</button>
                   </>
                   )}
                   <button className='w-full bg-red-500 text-white py-2 hover:bg-red-800'onClick={()=>navigate('/checkout')}>{isCheckoutPage ? 'Place Order' :'Checkout'}</button>
                   </div>
                   <Modal openModal={openModal} setOpenModal={setOpenModal}>
                    <ChangeAddress setAddress={setAddress} setOpenModal={setOpenModal}/>
                   </Modal>
      </>
  )
}
export default OrderSummary;