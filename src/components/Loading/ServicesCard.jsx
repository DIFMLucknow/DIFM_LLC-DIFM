import React from 'react'
import Buttons from './Buttons';
import { Link } from 'react-router-dom';


const ServicesCard = ({ content,title,logo}) => (

   <div className="flex justify-between gl:w-[344px] hover:w-[360px] gl:mx-auto xs:hover:w-[363px] w-[355px] mx-auto xs:w-[360px] xs:mx-auto flex-col px-10 py-12 rounded-[20px] sm:w-[370px] h-[520px] md:mr-10 sm:mr-5 my-5 bg-black-gradient-2 rounded-[20px] box-shadow hover:border-2 ss:hover:w-[363px] sm:hover:w-[374px] border-cyan-200" data-aos = "fade-right" data-aos-duration='2000'>
   <img src={logo} alt="servicecate"  className='sm:w-[370px] gl:w-[344px] h-[175px] w-[356px]  xs:w-[359px] ss:w-[359px] -mt-12 -mx-10 absolute  rounded-t-[20px] '/>
   
     <p className="text-white font-poppins font-normal text-[20px] leading-[24px] sm:text[22px]  text-center  mt-36">
     {title}
     </p>
 <p className="font-normal  text-justify text-[16px] sm:text[18px]  leading-[27.4px] text-gray-200 my-4 mt-4" style={{wordSpacing:"-3px"}}>
 {content}
 </p>

 <div className="flex flex-row">
   <div className="flex flex-col ml-4 ">
   <Link to={"/services"}> <Buttons styles="mx-14 gl:w-[160px] gl:mx-6 sm:mx-12" /></Link>
   </div>
 </div>
</div>
  )


export default ServicesCard
