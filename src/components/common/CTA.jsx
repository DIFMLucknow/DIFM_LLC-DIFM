import styles from "../../style";
import { Link } from "react-router-dom";

const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-[22px] leading-[45px] sm:text-[40px]`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] text-[15px] sm:text-[17px] mt-5 text-justify`}>
        Ready to take your lending business to the next level?
        DO IT FOR ME LLC offers innovative solutions to help you achieve your goals
      </p>
    </div>
    

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to={"/services"} onClick={scrollToTop}>
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started 
     </button> 
     </Link>
    </div>
   
  </section>
    
  )
}
 


export default CTA;
