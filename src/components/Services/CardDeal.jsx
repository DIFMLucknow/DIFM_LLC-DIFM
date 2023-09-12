import { Link } from "react-router-dom";
import { DIFM_LLC_whychoose_us } from "../../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} sm:mb-20 mb-0 sm:mt-16 mt-0 lg:px-10 xl:px-0 px-0`}>
    <div className={`${layout.sectionInfo}`} data-aos = "fade-right" data-aos-duration = "2000">
      <h2 className={`${styles.heading2} text-[35px] mx-4 leading-[42px] sm:text-[45px]`}>
      Why You Should <br className="sm:block hidden" /> Chose Us?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-4 text-justify`}>
      At DO IT FOR ME LLC, we are more than just a business operations team. We are innovators, problem-solvers, and passionate creators dedicated to helping businesses navigate complex landscapes and effect positive change in the world.<br /><br />

    Our team's expertise covers a vast spectrum, and our services are customized to meet the unique needs of each client. We pride ourselves on our creativity, adaptability, and commitment to excellence, reflected in our expansive portfolio of successful projects.      
      </p>
      <Link to={"/about"} type="button" className={`mt-10 text-[14px] sm:text-[20px] gl:mx-auto mx-4 sm:mx-4 sm:mx-0 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      View More
      </Link>
    </div>

    <div className={layout.sectionImg} data-aos = "fade-left" data-aos-duration = "2000">
      <img src={DIFM_LLC_whychoose_us} alt="billing" className="w-[100%] md:w-[100%] ss:w-[70%] xs:w-[70%] sm:w-[50%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
