import React from 'react';
import Cohesive from '../images/cohesive.png'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    
  return (
    <div className='w-[1250px] h-[85px] bg-[#661efe] rounded-full flex items-center relative gap-5 mt-5 max-2xl:w-[1140px] max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-md:h-[200px] max-md:rounded-3xl max-md:flex-col max-md:justify-center max-sm:w-[400px] max-sm:h-[300px] '>
     <div className='flex items-center justify-center gap-2 pl-8 max-lg:pl-4 max-md:pl-0'>
        <img src={Cohesive} alt="" />
        <h1 className='font-poppins text-white text-2xl font-semibold max-lg:text-xl max-lg:font-medium'><Link to='/'>Cohesive</Link></h1>
     </div>
     <div className='flex items-center justify-center gap-7 pl-10 max-lg:gap-2 max-lg:pl-1 max-md:pl-0 max-md:gap-3 max-sm:flex-col max-sm:gap-y-2'>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#features'>Features</HashLink>
        </h1>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#usecase'>Use cases</HashLink>
        </h1>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#templates'>Templates</HashLink>
        </h1>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#pricing'>Pricing</HashLink>
        </h1>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#community'>Community</HashLink>
        </h1> 
     </div>
     <div className='absolute right-5 max-md:static'>
        <button className='w-[195px] h-[45px] text-black text-md font-monster font-medium bg-[#02eaa5] rounded-full uppercase max-lg:h-[43px] max-lg:w-[170px] max-lg-text-sm'>
            <Link to='/'>Sign Up It's Free</Link>
        </button>
     </div>
    </div>
  )
}

export default Navbar