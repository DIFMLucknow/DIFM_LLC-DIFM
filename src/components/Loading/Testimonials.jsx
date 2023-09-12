import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} mx-4  flex-col relative mb-0 sm:mb-20`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex  justify-between items-center md:flex-row lg:ml-28 xl:ml-0 ml-0 flex-col sm:mb-16 mb-6 relative z-[1]" >
      <h2 className={`${styles.heading2} text-[20px] text-center sm:text-start sm:text-[45px] gl:text-[18px] gl:mx-4`} data-aos = "fade-right" data-aos-duration = "2000">
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 " data-aos = "fade-left" data-aos-duration = "2000">
        <p className={`${styles.paragraph} text-center sm:text-left max-w-[450px] text-[16px] sm:text-[20px] `}>
        DO IT FOR ME LLC is an innovative business operations team that leverages global expertise and insight to drive excellence for our clients
        </p>
      </div>
    </div>

    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6   sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
