import React, { useState } from 'react';
import styles from '../../style';
import {DIFM_LLC_FinanceConsulting, DIFM_LLC_Investor_service, DIFM_LLC_Tech_service, DIFM_LLC_Marketing_service , DIFM_LLC_FullIT_Service ,DIFM_LLC_Network_service} from '../../assets';
import CardDeal from './CardDeal';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';
import Testimonial_video from '../Loading/Testimonial_video';
import { Testimonial } from '../../constants';


const servicesData = [
  {
      id: 1,
      image:DIFM_LLC_FinanceConsulting,
      title: 'For Merchants',
      category: 'finance',
      content:'We offer a range of business solutions to help merchants optimize their operations and drive growth.',
  },
  {
      id: 2,
      image: DIFM_LLC_Investor_service,
      title: 'Lenders/Funders/Investors',
      category: 'finance',
      content:'We provide expert guidance and analysis to help lenders, funders, and investors make informed decisions.',
  },
  {
      id: 3,
      image: DIFM_LLC_Network_service,
      title: 'Join our Network Club',
      category: 'finance',
      content:'Become part of a global community committed to making a difference.',
  },
  {
      id: 4,
      image: DIFM_LLC_FullIT_Service,
      title: 'Strategy Development.',
      category: 'business',
      content:'Our strategy development services help businesses develop and implement effective strategies for growth and competitive advantage.',
  },
  {
      id: 5,
      image: DIFM_LLC_Tech_service,
      title: 'Full Service IT Company',
      category: 'business',
      content:'We are a full-service IT company offering a range of services, including software development, web design, and IT support.',
  },
  {
      id: 6,
      image: DIFM_LLC_Marketing_service,
      title: 'Marketing and Branding',
      category: 'business',
      content:'Our marketing and branding services help businesses develop and implement effective marketing strategies to drive brand awareness, customer engagement, and revenue growth.',
  }
];


const Services_module = () => {
 
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category) => {
      setActiveCategory(category);
  };

  const filteredServices =
      activeCategory === 'all'
          ? servicesData
          : servicesData.filter((service) => service.category === activeCategory);


  return (
    <div>
     <div>
      <h1 className="text-white font-poppins font-normal  text-[35px] leading-[28px] text-center mb-8 sm:text-[50px]" data-aos = "zoom-in" data-aos-duration = "2000">Services</h1>
         <p className='text-center mt-4 px-2 text-white text-[18px] xl:text-[20px] xl:mx-80 mt-4 ' data-aos = "zoom-in" data-aos-duration = "2000">Our services are designed to help businesses optimize their operations, minimize risk, and drive sustainable growth..</p>
         
            <div className="flex flex-wrap  sm:justify-start md:mx-48 mt-8 justify-center w-full feedback-container  lg:mx-72" data-aos = "fade-up" data-aos-duration = "2000">
                <button
                    className={`flex justify-between flex-col  px-10 py-5 rounded-[20px]  max-w-[170px]  max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'all' ? 'text-primary bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('all')}
                >
                     <p className="font-poppins font-normal text-[20px] leading-[24px] text-center font-bold tracking-wide -mt-2 ">
                       All
                   </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'finance' ? 'text-primary bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('finance')}
                >
                    <p className="font-poppins font-normal text-[20px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                    Finance Consulting
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'business' ? ' bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('business')}
                >
                    <p className="font-poppins font-normal text-[20px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                      Business Consulting
                     </p>
                </button>
            </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 ss:grid-cols-1 lg:grid-cols-3 gap-6">
         {filteredServices.map((service) => (
          <div key={service.id} className="flex justify-between  gl:w-[344px] hover:w-[360px] gl:mx-auto xs:hover:w-[363px] w-[355px] mx-auto xs:w-[360px] xs:mx-auto flex-col px-10 py-12 rounded-[20px] sm:w-[370px] h-[520px] md:mr-10 sm:mr-5 my-5 bg-black-gradient-2 rounded-[20px] box-shadow hover:border-2 ss:hover:w-[363px] sm:hover:w-[374px] border-cyan-200" data-aos = "fade-up" data-aos-duration = "2000">
          <img src={service.image} alt="servicecate"  className='sm:w-[370px] gl:w-[344px] h-[175px] w-[356px]  xs:w-[359px] ss:w-[359px] -mt-12 -mx-10 absolute  rounded-t-[20px]'/>
          
            <p className="font-poppins font-normal text-[22px] leading-[24px] text-white text-center font-bold tracking-wide  mt-40 -mx-8">
            {service.title}
            </p>
        <p className=" text-justify text-[16px] sm:text[18px] leading-[27.4px] text-gray-200 my-4" style={{wordSpacing:"-2px"}}>
        {service.content}
        </p>
    
        <div className="flex flex-row">
          <div className="flex flex-col ml-4 ">
          <Link to={"/contact"}> <Buttons styles="mx-14 gl:w-[160px] gl:mx-12 w-[60%]" /></Link> 
          </div>
        </div>
      </div>
        ))}
    </div>
    </div>
    <CardDeal />
    <div className='grid sm:grid-cols-2 grid-cols-1 mt-4 lg:ml-10 xl:ml-0 ml-0' data-aos = "zoom-in" data-aos-duration = "2000">
    <div><h2 className={`${styles.heading2} text-[35px] mx-4 leading-[42px] sm:text-[45px]`}>
    What people are saying <br className="sm:block hidden" />about us
      </h2></div>
      <div className='ml-5'><p className={`${styles.paragraph} text-white max-w-[450px] mt-5 mx-4 text-justify`}>DO IT FOR ME LLC is an innovative business operations team that leverages global expertise and insight to drive excellence for our clients</p></div>
      </div>
    <div className='flex mt-3 mb-4 grid grid-cols-1 sm:grid-cols-3 xs:grid-cols-2 xs:gap-2 xs:mx-2 mx-2'>
    {Testimonial.map((feature, index) => (
        <Testimonial_video key={feature.id} {...feature} index={index} />
      ))}
      </div>

    </div>
  
  )
  }

export default Services_module
