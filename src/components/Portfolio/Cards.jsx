import { DIFM_LLC_whychoose_us } from "../../assets";
import styles, { layout } from "../../style";
import { Link } from "react-router-dom";

const Cards = () => (
  <section className={`${layout.section}`}>
    <div className={layout.sectionInfo} data-aos = "fade-right" data-aos-duration = "2000">
      <h2 className={`${styles.heading2} text-[35px] mx-4 leading-[42px] sm:text-[45px]`}>
      Want to invest ? 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-4`}>
        Explore investment opportunities with us and grow your wealth. Our expert team will guide you in making informed investment decisions that align with your financial goals and risk tolerance.
      </p>
   <Link to='/investor'>
      <button type="button" className={`py-4 mt-10  mx-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Invest Now
  </button>
  </Link>
    </div>

    <div className={layout.sectionImg} data-aos = "fade-left" data-aos-duration = "2000">
      <img src={DIFM_LLC_whychoose_us} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Cards;
