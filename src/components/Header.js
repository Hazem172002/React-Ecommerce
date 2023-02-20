import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const {isOpen,setIsOpen} =useContext(SidebarContext)
  const {itemAmount}=useContext(CartContext)
  const [isActive,setIsActive]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>60?setIsActive(true):setIsActive(false);
    })
  })
  return <div className={`${isActive? 'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full transition-all duration-300 z-10 px-2`}>
    <div className='flex items-center justify-between'>
      <Link to='/'>
      <h2>Header</h2>
      </Link>
  
    <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute left-3 top-3 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
    
  </div>;
};

export default Header;
