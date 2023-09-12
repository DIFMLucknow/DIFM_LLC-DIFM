import styles from "../../style";
import { discount, DIFM_LLC_Providers } from "../../assets";
import GetStarted from "./GetStarted";
import Stats from "./Stats";
import Business from "./Business";
import Billing from "./Billing";
import CardDeal from "./CardDeal";
import Testimonials from "./Testimonials";
import { Testimonial } from "../../constants";
// import "../Animation.css";

const Hero = () => {

  
  return (
    <>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} slide-in-fade-in flex-col xl:px-0 sm:px-16 px-6`} data-aos = "fade-right" data-aos-duration = "2000">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className=" w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">DO IT FOR ME LLC</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold xs:text-[50px] ss:text-[69px] text-[29px] text-white ss:leading-[100.8px] leading-[75px] sm:text-[72px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="xs:flex ss:flex sm:mr-10  md:mr-4 mr-0 image-animation " style={{marginTop:'1px'}}>
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[30px] text-[25px] text-white ss:leading-[45.8px] leading-[35px] ss:w-[90%] sm:w-[65%] md:w-full sm:text-[28px]">
          Data, Investments, Finance, and Marketing Service Provider.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       The company specializes in solution providing to problems in the Lending industry, whether it be backend operations resource management or providing a working IT solution to lenders in the US.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} data-aos = "fade-left" data-aos-duration = "2000">
        <img src={DIFM_LLC_Providers} alt="billing" className="w-[100%] h-[100%] sm:w-[80%] md:w-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
    <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials  />
        </>
  );
};

export default Hero;
