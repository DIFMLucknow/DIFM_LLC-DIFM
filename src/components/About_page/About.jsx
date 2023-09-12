import React from "react";
import styles from "../../style";
import { team } from "../../constants";
import Our_Team from "./Our_Team";
import { DIFM_LLC_whowe_are, DIFM_LLC_expertise, DIFM_LLC_whatcanwedo } from "../../assets";

import FeedbackCard from "../Loading/FeedbackCard";
import { feedback } from "../../constants";

import FAQ from "./FAQ";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          data-aos = "fade-right" data-aos-duration = "2000"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-poppins text-gradient mb-2 ss:text-[29px] text-[19px] sm:text-[45px] 	text-transform: uppercase">
              WHO ARE WE?
            </h2>
          </div>
          <p className={`${styles.paragraph} text-[98%] md:text-[19px] max-w-[650px] mt-3 text-justify`}>
            At "DO IT FOR ME LLC", we are more than just a business operations
            team. We are innovators, problem-solvers, and passionate creators.
            Headquartered in Sheridan, Wyoming, with a strong backend team
            operating from India, we are a global synergy of minds and
            resources, dedicated to providing expert solutions to businesses and
            effecting positive change in the world.
          </p>
          <p className={`${styles.paragraph} text-[98%]  md:text-[19px] max-w-[650px] mt-3 text-justify`}>
            Our organization isn't defined merely by what we do, but by the
            passion and innovation we bring. We represent a consortium of
            experienced professionals dedicated to helping businesses navigate
            complex landscapes in lending industry underwriting, technical
            project management, website design, and digital marketing.
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          data-aos = "fade-left" data-aos-duration = "2000"
        >
          <img
            src={DIFM_LLC_whatcanwedo}
            alt="billing"
            className="w-[70%] h-[100%] sm:mt-22 sm:mb-24 xl:mt-0 md:mt-0 lg:mt-0 sm:w-[60%] sm:h-[80%] md:w-[85%]   md:h-[80%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>
      {/* second div */}
      <section
        id="home"
        className={`flex flex-col-reverse md:flex-row flex-col sm:-mt-24 md:mt-0 lg:mt-0 xl:mt-0 `}
      >
        <div className={`flex-1 flex md:my-0 my-19 relative `} data-aos = "fade-right" data-aos-duration = "2000">
          <img
            src={DIFM_LLC_expertise}
            alt="billing"
            className="w-[80%] h-[100%] mx-auto sm:w-[70%] sm:h-[80%] sm:mt-22 sm:mb-22 xl:mt-0 md:mt-0 lg:mt-0 sm:mx-auto md:w-[90%] md:h-[90%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          data-aos = "fade-left" data-aos-duration = "2000"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-poppins text-gradient mb-2 ss:text-[29px] text-[19px] sm:text-[45px] 	text-transform: uppercase">
              Expertise and Experience
            </h2>
          </div>
          <p className={`${styles.paragraph} text-[98%]  md:text-[19px] max-w-[650px] mt-5 text-justify`}>
            Our team's expertise covers a vast spectrum, which is neatly
            encapsulated in the acronym, DIFM - standing for Data, Investments,
            Finance, and Marketing. Our professionals bring years of experience
            in lending industry underwriting, technical project management,
            website design, and digital marketing, delivering excellence and
            precision in every task. Additionally, our experience expands beyond
            business operations to the creation of innovative Build to Assist
            (B2A) and Digital Information Platforms (DIP).
          </p>
        </div>
      </section>
      {/* second div close */}
      {/* third div */}
      <section id="home" className={`flex md:flex-row flex-col`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
          data-aos = "fade-right" data-aos-duration = "2000"
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-poppins text-gradient mb-2 ss:text-[29px] text-[19px] sm:text-[45px] 	text-transform: uppercase">
              What can we do?
            </h2>
          </div>

          <p className={`${styles.paragraph} text-[98%]  md:text-[19px] max-w-[650px] mt-5 text-justify`}>
            The question should be, what can't we do? Our team thrives on
            challenges, using them as fuel to create transformation solutions
            for our clients. We believe in the power of collective intelligence.
            Our Think Tank Initiative harnesses the expertise of our team to
            solve real-world problems, reflecting our commitment to give back to
            society. We're not just here to 'do it for you'; we're here to
            partner with you. Whether you're a business seeking operational
            efficiency or a user of our digital platforms, we're dedicated to
            delivering results that exceed expectations.
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          data-aos = "fade-left" data-aos-duration = "2000"
        >
          <img
            src={DIFM_LLC_whowe_are}
            alt="billing"
            className="w-[70%] h-[100%] sm:w-[60%] sm:h-[80%] sm:mt-10 sm:mb-16 xl:mt-0 md:mt-0 lg:mt-0 sm:mx-auto sm:-mt-12 md:w-[80%] md:h-[90%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </section>

      {/* third div close */}
      <FAQ />

      <h1 className="text-white font-poppins font-normal text-[40px] leading-[28px] text-center mb-8 sm:text-[50px]" data-aos = "zoom-in" data-aos-duration = "2000">
        Our Team
      </h1>
      <p className='text-white text-[18px] w-[90%] xl:text-[22px] xl:w-[60%] text-center text-[18px] mx-auto mb-14' data-aos = "fade-in" data-aos-duration = "2000">
       Our services are designed to help businesses optimize their operations, minimize risk, and drive sustainable growth..
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  sm:mx-0 flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {team.map((card) => (
          <Our_Team key={card.id} {...card} />
        ))}
      </div>
      {/* view more button define */}

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-4`}>
       <Link to={"/team"}><button
          type="button"
          className={`py-4 px-5 font-poppins mt-4 font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px]  outline-none ${styles}`}
        >
          View More
        </button> </Link>
      </div>

      <div className="grid w-[90%] md:w-[95%]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto  sm:justify-start justify-center w-full  relative z-[1]  sm:mx-6 mb-8">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default About;
