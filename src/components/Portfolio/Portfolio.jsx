import React from "react";
import styles from "../../style";
import { DIFM_LLC_BusinessConsulting, DIFM_LLC_FinanceConsulting, DIFM_LLC_FullIT_Service } from "../../assets";
import Upcoming_projects from "./Upcoming_projects";
import Cards from "./Cards";
import {
  DIFM_LLC_WMH_Logo,
  DIFM_LLC_BragSocial,
  DIFM_LLC_EarthByHumanslogo,
  DIFM_LLC_LaymanLogo,
  DIFM_LLC_WMHIndia_logo,
  DIFM_LLC_hrmlogo,
} from "../../assets";
import { Link } from "react-router-dom";



const Portfolio = () => {
  return (
    <div >
      <h1 className="mt-8 text-white font-poppins font-normal text-[35px] leading-[28px] text-center mb-8 sm:text-[50px]" data-aos = "zoom-in" data-aos-duration = "2000">
        Portfolio
      </h1>
      <p className="text-center mx-2 font-poppins text-white xl:w-[575px] xl:mx-80 lg:text-[18px] sm:text-[1.2rem] sm:w-[90%] sm:mx-auto" data-aos = "zoom-in" data-aos-duration = "2000">
      Our portfolio showcases the diverse range of projects we have worked on and the expertise we bring to the table.
      </p>
      {/* <div className="justify-center bg-blue-gradient w-[450px] mx-auto"><h2 className="text-center text-white">The Companies We Own</h2></div> */}
      
        <div className="mx-auto w-[98%] xs:w-[78%] sm:w-[50%] md:w-[35%] bg-discount-gradient mt-8 py-[12px] px-4 bg-black-gradient rounded-[10px] mb-2" data-aos = "fade-up" data-aos-duration = "2000">
          <h2 className="font-poppins text-center  text-white text-[21px] sm:text-[24px]">
            The Companies We Own
          </h2>
        </div>

      {/* portfolio layout start */}
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col-reverse h-[480px] w-[95%] mx-auto sm:h-[auto] md:h-[340px] mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        <div className="flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[25px] text-center xs:text-[2rem] sm:text-left mt-4 sm:mt-0  leading-[38px] text-white sm:text-[32px]`}
          >
            World Model Hunt
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 text-[14px] text-[14px] xs:text-[1.1rem] xs:w-[102%] sm:text-[17px]  leading-[22px] sm:w-[100%] md:w-[560px] w-[320px] mt-6 text-justify`}>
            World Model Hunt is a global modeling agency that specializes in discovering and promoting up-and-coming models from around the world. The agency offers a platform for new faces to showcase their talent and connect with industry professionals, including photographers, designers, and casting directors.
          </p>
          <Link to={"https://www.worldmodelhunt.com/"} className="mx-auto  md:ml-0">
          <button
            type="button"
            className={`w-[auto]   sm:w-[387px] mt-8 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button></Link>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-2 mx-14`}>
          <img src={DIFM_LLC_WMH_Logo} className="h-[100px] xs:h-[12vh] sm:h-[200px] ml-10 sm:ml-0" />
        </div>
      </section>
      {/* portfolio layout end */}
      {/* Bragsocial layout Start */}
      
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[95%] mx-auto h-[480px] sm:h-[auto] md:h-[340px]  mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        
        <div className={`${styles.flexCenter} lg:ml-0 sm:ml-2 ml-0 sm:mt-0 mt-0`}>
          <img src={DIFM_LLC_BragSocial} className="h-[150px] sm:h-[120%] sm:w-[250px] md:h-[250px] xs:h-[18vh]" />
        </div>
        <div className="mx-auto sm:ml-36 lg:ml-72  flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[1.75rem] xs:text-[2.2rem] mx-auto leading-[45px] sm:ml-0 text-white sm:text-[32px]`}
          >
            BragSocial
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 text-[14px]  xs:text-[1.1rem] xs:w-[102%] sm:text-[17px]   leading-[22px] md:w-[399px] lg:w-[560px] w-[320px] mt-6 text-justify`}>
            Bragsocial is an online news and media platform that provides a wide range of informative and engaging content, including news, entertainment, lifestyle, and technology. The platform aims to keep its readers updated and entertained with a fresh perspective on current events.
          </p>
          <Link to={"https://bragsocial.com/"} className="mx-auto md:ml-0">
          <button
            type="button"
            className={`w-[auto] mt-8 py-4 px-6 sm:w-[297px] md:w-[387px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button>
          </Link>
        </div>
        
      </section>
      {/* Bragsocial layout end */}
      {/* wmh india Start */}
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col-reverse w-[95%] h-[440px] xs:h-[52vh] mx-auto sm:h-[auto] md:h-[340px] mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        <div className="flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[28px] leading-[45px] xs:text-[2rem] xs:mt-8 text-center sm:text-left mt-4 sm:mt-0  text-white sm:text-[32px]`}
          >
            WMH India
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 xs:text-[1.1rem] xs:w-[102%] text-[14px] sm:text-[17px] leading-[22px] md:w-[560px] w-[320px] mt-6 text-justify`}>
            WMH India is a modeling agency that aims to discover and promote new modeling talents in India and provide them with opportunities to succeed in the fashion industry through training and connections with industry professionals.
          </p>
          <Link to={"https://wmhindia.com/"} className="mx-auto md:ml-0">
          <button
            type="button"
            className={`w-[auto]  mt-8 py-4 px-6 sm:w-[387px] font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button>
          </Link>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <img src={DIFM_LLC_WMHIndia_logo} className="h-[60px] xs:h-[6vh] sm:h-[60px]"/>
        </div>
      </section>
      {/* wmh india end */}

      {/* laymantlitigation start */}
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[95%] h-[455px] xs:h-[52vh] sm:h-[auto] md:h-[340px] mx-auto  mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        
        <div className={`${styles.flexCenter} lg:ml-0 sm:ml-2 ml-0 sm:mt-0 mt-4`}>
          <img src={DIFM_LLC_LaymanLogo} className="md:h-[60px] h-[80px] xs:h-[9vh] sm:w-[90%] sm:h-[auto] "/>
        </div>
        <div className="mx-auto md:ml-60 flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[1.65rem] xs:text-[2rem] xs:mt-8 mx-auto leading-[45px] sm:ml-0  sm:mt-0 mt-4  text-white sm:text-[32px]`}
          >
            Layman Litigation
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 text-[14px]  xs:text-[1.1rem] xs:w-[102%] sm:text-[17px] leading-[22px] lg:w-[560px] w-[320px] mt-6 text-justify`}>
           Layman Litigation is a legal consulting firm that offers affordable and accessible legal services to individuals and businesses. The firm specializes in dispute resolution, contract drafting, and legal advisory services, with a focus on providing practical solutions to clients' legal issues.
          </p>
          <Link to={"https://laymanlitigation.com/"} className="mx-auto md:ml-0">
          <button
            type="button"
            className={`w-[auto] sm:ml-0 sm:w-[310px] lg:w-[387px] md:ml-0 mt-8 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button>
          </Link>
        </div>
        
      </section>
      {/* laymantlitigation end */}

      {/* bizorbis start */}
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col-reverse w-[95%] h-[490px] xs:h-[52vh] sm:h-[auto] md:h-[340px] mx-auto mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        <div className="flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[28px] leading-[45px] text-center xs:text-[2rem] xs:mt-4 sm:text-left  sm:mt-0 text-white sm:text-[32px]`}
          >
            Earth By Humans
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 text-[14px] xs:text-[1.1rem] xs:w-[102%] sm:text-[17px] leading-[22px] md:w-[560px] w-[320px] mt-6 text-justify`}>
           Earth By Humans is an eco-friendly brand that offers sustainable and biodegradable products, including clothing, accessories, and home decor. The brand aims to promote environmental awareness and encourages conscious consumption by offering products that are made from natural and renewable materials and manufactured using eco-friendly processes.
          </p>
          <Link to={"https://earthbyhumans.com/"} className="mx-auto md:ml-0">
          <button
            type="button"
            className={`w-[auto] sm:ml-0 sm:w-[387px] mt-8 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button>
          </Link>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-2`}>
          <img src={DIFM_LLC_EarthByHumanslogo} className="sm:h-[130px] h-[80%] xs:h-[12vh] xs:mt-4 sm:mt-0"/>
        </div>
      </section>
      {/* bizorbis end */}

      {/* DIFM HRMS start */}
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[95%] h-[455px] xs:h-[52vh] mx-auto sm:h-[auto] md:h-[340px] sm:mb-32  mx-10 sm:flex-row mx-5 flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        
        <div className={`${styles.flexCenter} lg:ml-0 sm:ml-2 ml-0 sm:mt-0 mt-4`}>
          <img src={DIFM_LLC_hrmlogo} className="sm:h-[125px] sm:w-[140%] md:h-[135px] md:w-[150%] h-[95px] xs:h-[12vh]"/>
        </div>
        <div className="mx-auto md:ml-60 flex-1 flex flex-col">
          <h2
            className={`${styles.title} text-[1.65rem] mx-auto leading-[45px] xs:text-[2rem] sm:ml-0  sm:mt-0 mt-4  text-white sm:text-[32px]`}
          >
            DIFM HRMS
          </h2>
          <p className={`text-gray-300 w-[108%] -ml-2 text-[14px] sm:text-[17px]  xs:text-[1.1rem] xs:w-[102%] leading-[22px] md:w-[560px] w-[320px] mt-6 text-justify`}>
            DIFM HRMS is a comprehensive web-based application that fulfills all HRMS requirements, including payroll, benefits administration, recruitment, and performance management, providing businesses with an efficient and integrated solution.
          </p>
          <Link to={"https://difm.bizorbis.com/"} className="mx-auto md:ml-0">
          <button
            type="button"
            className={`w-[auto]  mt-8 sm:ml-0 sm:w-[387px]  py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            Visit Now
          </button>
          </Link>
        </div>
        
      </section>
      {/* DIFM HRMS end */}


     
     <Upcoming_projects />


    <Cards />
    </div>
  );
};

export default Portfolio;
