import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext)
  const {cart,clearCart,total,itemAmount}=useContext(CartContext)

  return <div className={`${isOpen? 'right-0':'-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl-max-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='text-sm uppercase font-semibold'>Shopping Bag ({itemAmount})</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto '>
    {cart.map(item=>{
  return <CartItem key={item.id} item={item}/>
})}
    </div>

<div className=' flex flex-col gap-y-3 py-4 mt-4'>
  <div className='flex  w-full justify-between items-center '>
    <div className='uppercase font-semibold ml-1'>
      <span className='mr-2'>Total</span>${parseFloat(total).toFixed(2)}
    </div>
    <div onClick={()=>clearCart()} className=' cursor-pointer bg-red-500 p-4 hover:bg-red-400 transition duration-300 text-white'>
      <FiTrash2 />
    </div>
  </div>
  <Link to='/' className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium '>View Cart</Link>
  <Link to='/' className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium '>Checkout</Link>

</div>
  </div>;
};

export default Sidebar;
