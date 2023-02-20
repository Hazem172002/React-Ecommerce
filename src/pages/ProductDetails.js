import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; 
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const {id}=useParams()
  const {products}=useContext(ProductContext)
  const {addToCart}=useContext(CartContext)
  const product=products.find(item=>{
    return item.id===parseInt(id)
  })
  const {title,image,price,description}=product
  return <section className='h-screen pt-32 pb-12 lg:py-32'>
    <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row items-center text-center md:text-left gap-10'>
        <div><img src={image} className='max-w-[200px] lg:max-w-sm'/></div>
        <div className=' flex flex-col  justify-between gap-2'>
          <div className='font-semibold text-3xl'>{title}</div>
          <div className='text-red-500'>${price}</div>
          <p>{description}</p>
          <div>
          <button onClick={()=>addToCart(product,id)} className='py-4 mt-3 bg-primary px-8 text-white'>Add to cart</button>
          </div>
         
        </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
