import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { LuGlobe } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full h-[110px] bg-[#661efe] rounded-t-full flex items-center relative gap-5 mt-14 max-2xl:w-[1140px] max-xl:w-[1000px] max-lg:w-[750px] max-lg:h-[250px] max-lg:rounded-t-3xl max-lg:flex-col max-lg:justify-center max-lg:gap-y-5 max-md:w-[600px] max-md:gap-y-6 max-sm:w-[400px] max-sm:h-[300px]'>
     <div className='flex items-center justify-center gap-2 pl-12 max-lg:pl-0'>
        <h1 className='font-poppins text-white text-2xl font-semibold max-lg:text-xl max-lg:font-medium'><Link to='/'>Cohesive</Link></h1>
        <img src="" alt="" />
     </div>
     <div className='flex items-center justify-center gap-7 pl-10 max-xl:gap-4 max-xl:pl-4 max-lg:pl-0 max-sm:flex-col max-sm:gap-y-2'>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#home'>AI Editor</HashLink>
        </h1>
        <h1 className='font-poppins text-white text-md font-medium max-lg:text-sm'>
          <HashLink smooth to='#features'>Content Inspiration</HashLink>
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
     <div className=' flex gap-8 absolute right-12 max-xl:gap-4 max-lg:static'>
        <button className=''>
           <LuGlobe className='text-2xl text-white font-[600px] max-lg:text-xl'/> 
        </button>
        <button className=''>
           <FaDiscord className='text-2xl text-white font-[600px] max-lg:text-xl'/> 
        </button>
        <button className=''>
           <FaSkype className='text-2xl text-white font-[600px] max-lg:text-xl'/> 
        </button>
        <button className=''>
           <BiLogoTelegram className='text-2xl text-white font-[600px] max-lg:text-xl'/> 
        </button>
        <button className=''>
           <FaLinkedinIn className='text-2xl text-white font-[600px] max-lg:text-xl'/> 
        </button>
     </div>
    </div>
  )
}

export default Footer