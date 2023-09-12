import React from 'react'
import styles from '../../style'
import {facebook, linkedin } from '../../assets'
// import dd from "https://photos.app.goo.gl/gTJcknyNKmnU9b87A";
const Our_Team = ({image,name,designation,linkedin_icon,linkdin_link,facebook_icon,facebook_link}) =>{

  return (
    <div>

   
   
  {/* <div className='grid grid-cols-3 gap-8'> */}
  <div className="hover:border-2 border-cyan-200 lg:w-[300px] lg:mx-auto flex sm:mx-auto  flex-col mx-14 px-10 py-12 ml-12 sm:ml-0 bg-black-gradient-2 rounded-[20px] ap:w-[340px] lg:w-[400px] md:mr-10  mr-0 my-5  max-sm sm:bg-blue-gradient" id='nn' data-aos = "fade-up" data-aos-duration = "2000">
         <div>
            <img src={image} className="w-[146px] h-[146px] rounded-full mx-auto" />
         </div>
        <h4 className='text-white text-center mt-4 font-poppins font-semibold text-[1.2rem] w-[102%]'>{name}</h4>
        <p className="font-poppins font-normal text-[12px] leading-[24px] text-dimWhite mx-auto mt-2">
        {designation}
        </p>
        <div className="flex flex-row mx-auto gap-4 mt-4 translate-y-40px" id='cards'>
        {/* <a href={facebook_link}><img src={facebook_icon} className='hover:scale-110'/></a> */}
        <a href={linkdin_link}><img src={linkedin_icon} className='hover:scale-110'/></a>
    </div>
     
  </div>
 

  {/* </div> */}

  

  </div>
    
    
  )

  }

export default Our_Team
