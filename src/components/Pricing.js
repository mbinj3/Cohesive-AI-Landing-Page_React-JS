import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <div id='pricing' className='w-[1250px] h-[400px] bg-[#661efe] rounded-[50px] flex flex-col items-center justify-center text-center max-2xl:w-[1140px] max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[400px]'>
     
        <h2 className='font-poppins text-white text-[55px] font-medium max-lg:text-[42px] max-md:text-[35px] max-sm:text-[23px]'>
          Start Using Cohesive Today!
        </h2>
        
        <p className='w-[600px] font-poppins text-white text-xl font-thin pt-6 max-lg:text-md capitalize max-md:text-sm max-sm:w-[300px]'>
            Experience the worlds most powerful AI editor, where
        </p>
        <p className='w-[600px] font-poppins text-white text-xl font-thin pt-2 max-lg:text-md capitalize max-md:text-sm max-sm:w-[300px]'>
            Human creativity meets AI brilliance
        </p>
        <div className='flex gap-5 mt-10 max-sm:flex-col max-sm:items-center'>
            <button className='w-[200px] h-[55px] text-black text-md font-monster font-semibold bg-[#02eaa5] rounded-full uppercase max-lg:w-[155px] max-lg:h-[48px] max-lg:text-sm'>
                <Link to='/'>Try It's Free</Link>
            </button>
            <button className='w-[200px] h-[55px] text-[#02eaa5] text-sm font-monster font-medium bg-[#4d42e7] rounded-full max-lg:w-[180px] max-lg:h-[48px] max-lg:text-[12px]'>
                <Link to='/'>No credit card required</Link>
            </button>
        </div>
     
    </div>
  )
}

export default Pricing