import React from 'react';
import { Link } from 'react-router-dom';
import Cohesive2 from '../images/cohesive2.png'
function Home() {
  return (
    <div id='home' className='w-[1250px] h-[750px] bg-[#661efe] rounded-[50px] flex   relative gap-5 mt-5 max-2xl:w-[1140px] max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[400px]'>
     <div className='flex flex-col '> 
      <div className='pt-[65px] pl-[65px] '> 
          <p className='font-poppins text-[#02eaa5] text-md font-medium '>
            03 Months Extra On Yearly Plans
          </p>
          <h2 className='font-poppins text-white text-[70px] font-medium max-lg:text-[50px] max-sm:text-[30px]'>
            Create Magical Content
          </h2>
          <h2 className='font-poppins text-white text-[70px] font-medium max-lg:text-[50px] max-sm:text-[30px]'>
            With The Most AI
          </h2>
      </div> 
      <div className='pt-[25px] pl-[65px]'> 
          <h2 className='font-poppins text-white text-[35px] font-regular max-lg:text-[32px] max-sm:text-[23px]'>
          Future of Generative AI
          </h2>
          <p className='font-poppins text-white text-[20px] font-thin mt-2 capitalize max-lg:text-[15px] max-sm:text-[12px]'>
          End ChatGPT prompt struggles, Create, Refine, Edit
          </p>
          <p className='font-poppins text-white text-[20px] font-thin mt-1 capitalize max-lg:text-[15px] max-sm:text-[10px]'>
          And Publish Seamlessly with cohesive
          </p>
          <button className='w-[200px] h-[63px] text-black text-md font-monster font-semibold bg-[#02eaa5] rounded-full uppercase mt-8 max-lg:w-[165px] max-lg:h-[53px] max-lg:text-sm'>
              <Link to='/'>Sign Up It's Free</Link>
          </button>
          <h2 className='font-poppins text-white text-[80px] font-semibold uppercase text-center mt-20 ml-[155px] max-2xl:ml-[100px] max-xl:ml-[45px] max-lg:text-[53px] max-lg:mt-44 max-lg:ml-[33px] max-md:text-[45px] max-md:mt-[140px] max-md:ml-[-63px] max-sm:text-[32px] max-sm:mt-[240px]'>
          <span className='text-[#02eaa5]'>Powerful</span> AI Editor
          </h2>  
      </div>
     </div>
     <div className='absolute top-14 right-20 max-2xl:top-40 max-xl:top-44 max-xl:right-10 max-md:top-[370px]'>
       <img src={Cohesive2} alt="" className='max-2xl:h-[470px] max-2xl:w-[400px] max-xl:w-[380px] max-xl:h-[450px] max-lg:h-[350px] max-lg:w-[280px] max-md:h-[310px] max-md:w-[230px] max-sm:h-[270px] max-sm:w-[180px]'/>
     </div>
    </div>  
  )
}

export default Home