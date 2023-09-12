import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../style'
import { useEffect } from 'react'
const Digital_Information_Platform = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
       <div className="py-[6px] px-6 sm:px-4 bg-discount-gradient rounded-[10px] mb-14">
      <h1 className={`${styles.heading2} text-[25px] leading-[28px] text-center  sm:text-[35px] mt-5`}>DIP (Digital Information Platform) by DIFM
      
      </h1>
      <p className='text-center mb-8 text-white'>"Empowering the Digital Landscape with RIGHT Information."</p>
   <div className='w-[1171px] mx-0 h-auto sm:h-auto sm:w-[1171px] sm:mx-8'>
   <p className='text-white text-[15px] font-poppins  sm:text-[24px]'>Introduction</p>
   <p className='text-dimWhite mt-2 text-[14px] font-normal w-[328px] sm:w-[1171px] sm:text-[15px] text-justify'>
   "In the digital age, information is power. At DIFM, we take this adage to heart, pioneering the concept of DIP – Digital Information Platform. Our mission is to craft platforms that serve as reservoirs of quality information, designed to assist and enlighten the global public."
<br /><br />
    </p>
  <p className='text-white text-[15px] font-poppins sm:text-[24px]'>Our Vision</p> 
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"More than just platforms, our DIP initiatives represent hubs of knowledge, catering to diverse interests, professions, and passions. We aspire to bridge information gaps, ensuring that no matter where you are or what you seek, a DIFM Digital Information Platform is there to guide and inform."
<br /><br /></p>

   <p className='text-white text-[15px] font-poppins sm:text-[24px] mb-5'>Our DIP Initiatives</p>
   <ul className='list-disc sm:ml-6 ml-0'>
  <li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>WorldModelHunt.com
</li>

  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Celebrating Global Beauty and Talent."<br></br>
  "Beyond the glitz and glamour of modeling, <Link to='https://www.worldmodelhunt.com/'><span className='text-cyan-400'>WorldModelHunt.com</span></Link> serves as a vast repository of resources for aspiring models, agencies, and fashion enthusiasts. Dive into a world where beauty meets knowledge."

<br /><br /></p>



  <li className='text-white text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[19px] text-justify'>BragSocial.com</li>
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Staying Updated, One Post at a Time."<br></br>
  "Venture into <Link to='https://bragsocial.com/'><span className='text-cyan-400'>BragSocial.com</span></Link>, your one-stop platform for the latest trends, news, and insights. Keep your fingers on the pulse of the digital world, always staying a step ahead."
<br /><br /></p>


  <li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>WMHIndia.com</li>
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Spotlighting India's Modeling Scene."<br></br>
  "<Link to='https://wmhindia.com/'><span className='text-cyan-400'>WMHIndia.com</span></Link> brings to the forefront the vibrant and diverse modeling industry of India. An encyclopedia for India's aspiring models and fashion mavens."
<br /><br /></p>

<li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>AHealthPlace.com</li>
<p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Your Companion to a Healthier Life."<br></br>
"Venture into the realms of physical and mental well-being. <Link to='https://ahealthplace.com/'><span className='text-cyan-400'>AHealthPlace.com</span></Link> offers insights, tips, and guidance, ensuring that health is always in your grasp."
<br /><br /></p>


<li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>LaymanLitigation.com</li>
<p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Demystifying the World of Law."<br></br>
"In the intricate labyrinth of legalities, <Link to='https://laymanlitigation.com/'><span className='text-cyan-400'>LaymanLitigation.com</span></Link> stands as your guiding star. Simplifying law, one article at a time."
<br /><br /></p>


<li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>Aeroway.one</li>
<p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Navigating the Future of Travel."<br></br>
"Explore the innovations and trends shaping the world of aviation and travel. With <Link to='https://aeroway.one/'><span className='text-cyan-400'>Aeroway.one</span></Link>, the future is always on the horizon."
<br /><br /></p>

<li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>EarthByHumans.com</li>
<p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Unraveling the Wonders of Our Planet."<br></br>
"Join us on a journey to discover, understand, and appreciate the marvels of our blue planet. <Link to='https://earthbyhumans.com/'><span className='text-cyan-400'>EarthByHumans.com</span></Link> is your atlas to the wonders of the world."
<br /><br /></p>

    </ul>
   

   <p className='text-white text-[16px] font-poppins sm:text-[24px]'>Join the Information Revolution</p>
   <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify mb-5'>"Believe in the power of information? Want to collaborate, share, or simply discuss the digital landscape's future? We're always eager to connect with fellow visionaries."
</p>

<Link to='/contact'>
   <button type="button" className={`py-2 px-6  font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mb-4 ${styles}`}>
    Join us
  </button>
  </Link>

   </div>
     </div>
    </>
  )
}

export default Digital_Information_Platform

