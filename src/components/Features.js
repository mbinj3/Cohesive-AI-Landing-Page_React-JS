import React from 'react';
import HandsIcon from '../images/hands.png';
import WebIcon from '../images/web-design.png';
import JigsawIcon from '../images/jigsaw.png';
import { HiArrowLongRight } from "react-icons/hi2";

function Features() {
  return (
    <div id='features' className='w-[1250px] h-[750px] bg-white flex flex-col items-center justify-center max-2xl:w-[1140px] max-xl:w-[1000px] max-lg:w-[750px] max-lg:h-[1080px] max-md:w-[600px] max-md:h-[1540px] max-sm:w-[400px]'>
      <div className='pt-20 max-md:pt-0'>
        <h2 className='font-poppins text-black text-[65px] font-semibold text-center tracking-tight max-xl:text-[62px] max-lg:text-[47px] max-md:text-[35px] max-sm:text-[23px]'>
          Meet The Future Of Generative AI
        </h2> 
      </div>
      <div className='flex items-center justify-center gap-10 pt-12 max-xl:gap-5 max-lg:flex-wrap  max-lg:gap-10'>
        <div className='h-[390px] w-[310px] bg-gray-200 rounded-xl'>
          <div className='w-[320] h-[160px]'>
            <img src={HandsIcon} alt="" className='h-36 w-36 pt-5 pl-6' />
          </div>
          <div className='mt-8 pl-6'>
            <h2 className='font-poppins text-black text-xl font-semibold pt-2 '>
              Best Quality AI Content
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-3 capitalize w-64'>
            GoodBye boring copies, Make your content engaging, relevant and optimised for conversion with cohesive
            </p>
            <div className='flex gap-3 pt-5 '>
              <p className='font-poppins text-[#661efe] text-md font-semibold uppercase cursor-pointer'>
              Start Creating  
              </p>
              <HiArrowLongRight className='font-poppins text-[#661efe] text-2xl font-semibold uppercase cursor-pointer'/>
            </div>  
          </div>
        </div>
        <div className='h-[390px] w-[310px] bg-gray-200 rounded-xl'>
          <div className='w-[320] h-[160px]'>
            <img src={WebIcon} alt="" className='h-36 w-36 pt-5 pl-6' />
          </div>
          <div className='mt-8 pl-6'>
            <h2 className='font-poppins text-black text-xl font-semibold pt-2 capitalize'>
              2k+ Templates to start
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-3 capitalize w-64'>
            Bring your vision to life at lightning speed. Choose from handpicked curated templates and produce high quality
            </p>
            <div className='flex gap-3 pt-5'>
              <p className='font-poppins text-[#661efe] text-md font-semibold uppercase cursor-pointer'>
              Start Creating  
              </p>
              <HiArrowLongRight className='font-poppins text-[#661efe] text-2xl font-semibold uppercase cursor-pointer'/>
            </div>  
          </div>
        </div>
        <div className='h-[390px] w-[310px] bg-gray-200 rounded-xl'>
          <div className='w-[320] h-[160px]'>
            <img src={JigsawIcon} alt="" className='h-36 w-36 pt-5 pl-6' />
          </div>
          <div className='mt-8 pl-6'>
            <h2 className='font-poppins text-black text-xl font-semibold pt-2 '>
            Collaborate With Team
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-3 capitalize w-64'>
            Bid farewell to endless email and slack threads. Collaborate in real-time, Keep everyone on the same page
            </p>
            <div className='flex gap-3 pt-5'>
              <p className='font-poppins text-[#661efe] text-md font-semibold uppercase cursor-pointer'>
              Start Creating  
              </p>
              <HiArrowLongRight className='font-poppins text-[#661efe] text-2xl font-semibold uppercase cursor-pointer'/>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features