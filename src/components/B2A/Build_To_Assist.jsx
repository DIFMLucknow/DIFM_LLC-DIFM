import React from 'react'
import styles from '../../style'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const B2A = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
          <div className="py-[6px] px-6 sm:px-4 bg-discount-gradient rounded-[10px] mb-14">
      <h1 className={`${styles.heading2} text-[25px] leading-[28px] text-center  sm:text-[35px] mt-5`}>B2A (Build To Assist) by DIFM</h1>
      <p className='text-center mb-8 text-white'>"Innovation at the Service of the World."</p>
   <div className='w-[1171px] mx-0 h-auto sm:h-auto sm:w-[1171px] sm:mx-8'>
   <p className='text-white text-[15px] font-poppins  sm:text-[24px]'>Introduction</p>
   <p className='text-dimWhite mt-2 text-[14px] font-normal w-[328px] sm:w-[1171px] sm:text-[15px] text-justify'>
   At DIFM, we believe in harnessing the power of innovation to benefit not just businesses but the wider global community. We proudly introduced the concept of B2A – Build To Assist – a unique approach that focuses on creating platforms to aid and empower the global public.<br /><br />
    </p>
  <p className='text-white text-[15px] font-poppins sm:text-[24px]'>Our Vision</p> 
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>Our B2A vision transcends traditional business models. Instead of a solely profit-driven approach, we strive to fill gaps in the digital landscape, providing value, support, and essential tools to assist individuals across various facets of life.<br /><br /></p>

   <p className='text-white text-[15px] font-poppins sm:text-[24px] mb-5'>Our B2A Platforms</p>
   <ul className='list-disc sm:ml-6 ml-0'>
  <li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>EmployWoman.com</li>

  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Empowering Women in the Professional World."<br></br>
"At DIFM, we recognize the immense potential and talent that women bring to the professional sphere. <Link to='http://employwoman.com/'><span className='text-cyan-400'>EmployWoman.com</span></Link> is our commitment to championing women's careers. Through this platform, we aim to provide a dedicated space for women to explore job opportunities, upskill, and network, ensuring that the path to their professional success is both fulfilling and rewarding."
<br /><br /></p>



  <li className='text-white text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[19px] text-justify'>WorldModelHunt.com</li>
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"A Global Stage for Aspiring Models."<br></br>
"We have created a global platform that celebrates beauty, talent, and diversity. <Link to='https://www.worldmodelhunt.com/'><span className='text-cyan-400'>WorldModelHunt.com</span></Link> acts as a bridge connecting aspiring models to the fashion industry, ensuring talent gets the recognition and opportunities it deserves."
<br /><br /></p>


  <li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>BookAPhoto.org</li>
  <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Capturing Moments, One Click at a Time."<br></br>
"<Link to='http://bookaphoto.org'><span className='text-cyan-400'>BookAPhoto.org</span></Link> is our answer to the growing need for professional photography services. We've streamlined the process of finding and booking photographers, making it easier than ever to capture those perfect moments."
<br /><br /></p>

<li className='text-white  text-[12px] w-[328px] font-normal sm:w-[1171px] sm:text-[18px] text-justify'>DIFMLaw.com</li>
<p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify'>"Legal Solutions, Simplified.<br></br>
   In the complex world of legalities, <Link to='https://test.difmlaw.com/'><span className='text-cyan-400'>DIFMLaw.com</span></Link> stands as a beacon of clarity. Our platform is designed to make legal assistance accessible to all, offering expert network guidance and solutions for a range of legal concerns."
<br /><br /></p>

    </ul>
   

   <p className='text-white text-[16px] font-poppins sm:text-[24px]'>Why B2A?</p>
   <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify mb-5'>"B2A is not just a business model; it's our philosophy. We recognized the need for platforms that go beyond mere transactions, ones that actively assist, support, and uplift. With B2A, we're at the forefront of this innovative approach, ensuring that as we progress technologically, we do so with the welfare of the global community at heart."</p>


   <p className='text-white text-[16px] font-poppins sm:text-[24px]'>Join The Movement</p>
   <p className='text-dimWhite mt-2 text-[14px] w-[328px] font-normal sm:w-[1171px] sm:text-[15px] text-justify mb-5'>"If you believe in our vision and want to be a part of this transformative journey, get in touch. Whether it's a collaboration, partnership, or just a chat about the future of B2A, we're always eager to connect."</p>
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

export default B2A
