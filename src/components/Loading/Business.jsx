import { Link } from "react-router-dom";
import { features } from "../../constants";
import styles, { layout } from "../../style";

import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[120%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={`${layout.section} mx-10 sm:mx-10 sm:mx-0 mt-14 `}>
    <div className={layout.sectionInfo} data-aos = "fade-right" data-aos-duration = "2000">
      <h2 className={`${styles.heading2} font-poppins font-semibold  text-[26px] text-white ss:leading-[45.8px] leading-[35px] w-full sm:text-[38px] mx-0`} >
      DIFM focuses on its <br className="sm:block hidden" />services  on major keywords
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5  text-[15px]  sm:text-[18px]`}>
      Data, Investments, Finance, and Marketing. Contact us to enquire about how our think tank can help your business grow, in a shorter period being a less expensive solution provider to your business growth – DIFM.LLC. Finance and IT Solutions provider.
      </p>

      <Link to={"/contact"} ><Button styles={`mt-10 text-[14px] ml-0 sm:text-[20px] mx-16 sm:mx-0`} /></Link>
    </div>

    <div className={`${layout.sectionImg} flex-col`} data-aos = "fade-left" data-aos-duration = "2000">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  
);

export default Business;
