import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {BsPlus,BsEyeFill} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
const Product = ({product}) => {

  const {id,image,category,title,price}=product
  const {addToCart}=useContext(CartContext)
  return <div>
    <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        <div>
          <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' />
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-3 p-2 bg-red-500/40 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={()=>addToCart(product,id)}>
            <div className='flex justify-center items-center text-white w-11 h-11 bg-red-500 '>
              <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='p-3 bg-white   '>
          <BsEyeFill />
          </Link>
        </div>
      </div>
    </div>
    <div>
      <div className='text-sm capitalize text-gray-500'>{category}</div>
      <div>
        <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
      </div>
      <div className='font-semibold'>${price}</div>

    </div>
  </div>;
};

export default Product;
