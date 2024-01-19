import React from 'react';
import YoutubeIcon from '../images/Youtube.jpg';
import FacebookIcon from '../images/Facebook.jpg';
import TikTokIcon from '../images/Tiktok.jpg';
import InstagramIcon from '../images/Instagram.webp';

import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";

function Templates() {
  return (
    <div id='templates' className='w-[1250px] h-[750px] bg-white flex flex-col items-center justify-center  max-2xl:w-[1140px] max-xl:w-[1000px] max-xl:h-[1050px] max-lg:w-[750px] max-md:w-[600px] max-md:h-[950px] max-sm:w-[400px] max-sm:h-[1650px]'>
      <div className='pt-20'>
        <h2 className='font-poppins text-black text-[65px] font-semibold text-center tracking-tight max-xl:text-[62px] max-lg:text-[47px] max-md:text-[35px] max-sm:text-[23px]'>
          Our Most Popular Templates
        </h2> 
      </div>
      <div className='flex items-center justify-center gap-7 pt-12 max-2xl:gap-2 max-xl:flex-wrap max-xl:gap-10 max-sm:gap-12 max-sm:gap-y-10'>
        <div className='h-[330px] w-[280px] bg-gray-200 rounded-xl flex flex-col items-center'>
          <div className='h-[160px] w-[245px] bg-black rounded-xl mt-5 relative'>
            <img src={YoutubeIcon} alt="" className='rounded-xl' />
            <button className='h-11 w-11 border-2 rounded-full bg-red-600 flex items-center justify-center absolute left-3 top-[138px]'><FaYoutube className='text-white text-xl'/></button>
          </div>
          <div className=''>
            <h2 className='font-poppins text-black text-xl font-semibold pt-6 pl-2 tracking-tight'>
                Script for Youtube Video
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-1 pl-2 capitalize w-64 tracking-tight'>
                Generate scripts that engage your audience
            </p>           
          </div>
          <div className='w-[245px] flex gap-10'>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2 ml-1'><BiSolidLike className='text-[#661efe] text-xl'/> 292.8k</button>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2'><FaHeart className='text-[#661efe] text-xl'/> 17.9k</button>
          </div>
        </div>
        <div className='h-[330px] w-[280px] bg-gray-200 rounded-xl flex flex-col items-center'>
          <div className='h-[160px] w-[245px] bg-black rounded-xl mt-5 relative'>
            <img src={FacebookIcon} alt="" className='h-[160px] w-[245px] rounded-xl' />
            <button className='h-11 w-11 border-2 rounded-full bg-blue-600 flex items-center justify-center absolute left-3 top-[138px]'><FaFacebookF className='text-white text-xl'/></button>
          </div>
          <div className=''>
            <h2 className='font-poppins text-black text-xl font-semibold pt-6 pl-2 tracking-tight'>
                Script for Facebook Post
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-1 pl-2 capitalize w-64 tracking-tight'>
                Generate scripts that engage your audience
            </p>           
          </div>
          <div className='w-[245px] flex gap-10'>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2 ml-1'><BiSolidLike className='text-[#661efe] text-xl'/> 292.8k</button>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2'><FaHeart className='text-[#661efe] text-xl'/> 17.9k</button>
          </div>
        </div>
        <div className='h-[330px] w-[280px] bg-gray-200 rounded-xl flex flex-col items-center'>
          <div className='h-[160px] w-[245px] bg-black rounded-xl mt-5 relative'>
            <img src={TikTokIcon} alt="" className='h-[160px] w-[245px] rounded-xl' />
            <button className='h-11 w-11 border-2 rounded-full bg-black flex items-center justify-center absolute left-3 top-[138px]'><FaTiktok className='text-white text-xl'/></button>
          </div>
          <div className=''>
            <h2 className='font-poppins text-black text-xl font-semibold pt-6 pl-2 tracking-tight'>
                Make TikTok Video Cont...
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-1 pl-2 capitalize w-64 tracking-tight'>
                Generate scripts that engage your audience
            </p>           
          </div>
          <div className='w-[245px] flex gap-10'>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2 ml-1'><BiSolidLike className='text-[#661efe] text-xl'/> 292.8k</button>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2'><FaHeart className='text-[#661efe] text-xl'/> 17.9k</button>
          </div>
        </div>
        <div className='h-[330px] w-[280px] bg-gray-200 rounded-xl flex flex-col items-center'>
          <div className='h-[160px] w-[245px] bg-black rounded-xl mt-5 relative'>
            <img src={InstagramIcon} alt="" className='h-[160px] w-[245px] rounded-xl' />
            <button className='h-11 w-11 border-2 rounded-full bg-pink-600 flex items-center justify-center absolute left-3 top-[138px]'><FaInstagram className='text-white text-xl'/></button>
          </div>
          <div className=''>
            <h2 className='font-poppins text-black text-xl font-semibold pt-6 pl-2 tracking-tight'>
                Create Instagram Post
            </h2>
            <p className='font-poppins text-gray-500 text-sm font-medium pt-1 pl-2 capitalize w-64 tracking-tight'>
                Generate scripts that engage your audience
            </p>           
          </div>
          <div className='w-[245px] flex gap-10'>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2 ml-1'><BiSolidLike className='text-[#661efe] text-xl'/> 292.8k</button>
            <button className='h-11 w-26 flex items-center justify-center text-sm font-medium gap-2'><FaHeart className='text-[#661efe] text-xl'/> 17.9k</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates