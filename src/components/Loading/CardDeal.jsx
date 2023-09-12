import { Link } from "react-router-dom";
import { DIFM_LLC_companieswe_build } from "../../assets";
import styles, { layout } from "../../style";

const CardDeal = () => (
  <section className={`${layout.section} mx-8 sm:mx-10 sm:mx-0 mb-0 sm:mb-24`}>
    <div className={layout.sectionInfo} data-aos = "fade-right" data-aos-duration = "2000">
      <h2 className={`${styles.heading2} text-[23px] sm:text-[45px]`}>
      The Companies We <br className="sm:block hidden" /> Build
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[16px] sm:text-[20px] justify-between`}>
      We build more than 20 companies worldwide including WorldModelHunt, BragSocial, Laymenlitigation and more.  
      </p>
      <button type="button" className={`mt-10 text-[14px] sm:text-[20px] mx-20 sm:mx-0 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        <Link to={"/portfolio"}>Check them out</Link>
      </button>
    </div>

    <div className={layout.sectionImg} data-aos = "fade-left" data-aos-duration = "2000">
      <img src={DIFM_LLC_companieswe_build} alt="billing" className="w-[100%] h-[100%] ss:w-[60%] md:w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
