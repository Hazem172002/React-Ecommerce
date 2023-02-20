import React, { useContext, useState } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const CartItem = ({item}) => {
  const {id,title,image,price,amount}=item;
  const {removeFromCart,plus,minus}=useContext(CartContext)

  return <div className='mt-2'>

    <div className='border-b border-gray-300  mb-5 p-3 h-auto flex justify-between items-center'>
    <Link to={`/product/${id}`} className='max-w-[60px] max-h-[80px]'>
      <img src={image} />
      </Link>
      <div className='items-center'>

      <Link to={`product/${id}`}><div className='hover:underline uppercase text-sm '>{title}</div></Link>
      <div className='flex gap-x-2 h-[36px] justify-between'>
      <div className='flex gap-3 items-center'>
        <div className='border border-gray-300 p-1 cursor-pointer hover:bg-pink-400 transition duration-300'>
        <IoMdRemove onClick={()=>minus(id)}/>
        </div>
        <div>{amount}</div>
        <div className='border border-gray-300 p-1 cursor-pointer hover:bg-pink-400 transition duration-300'>
          <IoMdAdd onClick={()=>plus(id)}/>
        </div>

        </div>
    
        <div>${price}</div>
      <div>${price*amount}</div>
      

      </div>
     
      </div>

      <Link className=''>
      <IoMdClose onClick={()=>removeFromCart(id)} className='text-xl text-red-500  hover:text-gray-300 transition duration-300'/>
      </Link>

     
    </div>
    

    </div>;
};

export default CartItem;
