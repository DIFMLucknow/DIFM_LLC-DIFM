import React from 'react'
import styles from '../../style'
import {facebook, linkedin } from '../../assets'
const Our_Team = ({image,name,designation,linkedin_icon,linkdin_link,facebook_icon,facebook_link}) => (
    <div>

   
  
  {/* <div className='grid grid-cols-3 gap-8'> */}
  <div className="mx-auto w-[95%] sm:w-[90%] sm:mx-auto ss:mx-auto xs:mx-auto bg-gradient  hover:border-2 border-cyan-200 flex  flex-col  px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5  my-5 bg-black-gradient-2 box-shadow" id='nn' data-aos = "fade-up" data-aos-duration = "2000">
         <div>
            <img src={image} className="w-[146px] h-[146px] rounded-full mx-auto" />
         </div>
        <h4 className='text-white text-[103%] mx-auto mt-4 font-poppins font-semibold text-[22px]'>{name}</h4>
        <p className="font-poppins font-normal text-[12px] leading-[24px] text-dimWhite mx-auto mt-2">
        {designation}
        </p>
        <div className="flex flex-row mx-auto gap-4 mt-4" id='cards'>
        {/* <a href={facebook_link}><img src={facebook_icon} /></a> */}
        <a href={linkdin_link}><img src={linkedin_icon} /></a>
    </div>
     
  </div>
 

  {/* </div> */}
  

  

  </div>
    



    
  )



export default Our_Team
