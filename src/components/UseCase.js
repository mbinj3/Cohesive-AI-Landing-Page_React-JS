import React from 'react';
import { Link } from 'react-router-dom';
import Cohesive1 from '../images/cohesive1.png';

function UseCase() {
  return (
    <div id='usecase' className='w-[1250px] h-[550px] bg-[#661efe] rounded-[50px] flex items-center justify-center gap-10 max-2xl:w-[1140px] max-2xl:gap-6 max-xl:w-[1000px] max-xl:gap-4 max-lg:w-[750px] max-md:w-[600px] max-md:flex-col max-md:gap-0 max-sm:w-[400px]'>
     <div className='max-md:mt-[-20px]'>
      <img src={Cohesive1} alt="" className='max-lg:h-[300px] max-lg:w-[250px] max-md:h-[200px] max-md:w-[180px]'/>
     </div> 
     <div className='w-[600px] max-xl:w-[500px] max-lg:w-[390px] max-md:text-center max-sm:w-[300px]'>
        <h2 className='font-poppins text-white text-[44px] font-medium max-lg:text-[34px] max-md:text-[28px]'>
            <span className='text-[#02eaa5]'>Powerful</span> & Intuitive. The AI
        </h2>
        <h2 className='font-poppins text-white text-[44px] font-medium max-lg:text-[34px] max-md:text-[28px]'>
            Editor For Everyone.
        </h2>
        <p className='font-poppins text-white text-xl font-extrathin mt-2 capitalize max-lg:text-md max-md:text-sm'>
            No matter what you do, we have a template for you. Effortlessly edit, text, images and language translations to ensure that every word is precisely crafted to perfection
        </p>
        <button className='w-[200px] h-[55px] text-black text-md font-monster font-semibold bg-[#02eaa5] rounded-full uppercase mt-8 max-lg:w-[155px] max-lg:h-[48px] max-lg:text-sm'>
            <Link to='/'>Try It's Free</Link>
        </button>
     </div>
    </div>
  )
}

export default UseCase