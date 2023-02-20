import React from 'react';
import {WomanImg} from '../img/woman_hero.png'
const Hero = () => {
  return <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
    <div className='mx-auto container flex justify-around h-full '>
      <div className='flex flex-col justify-center'>
        <div className='flex items-center font-semibold gap-3 uppercase'>
          <div className='w-[10px] h-[2px] bg-red-500'></div>
          <div >New Trend</div>
        </div>
        <h1 className='text-[70px]'>Autumn Sale Stylish <span className='font-semibold'>Womens</span></h1>
      </div>
      
    </div>
  </section>;
};

export default Hero;
