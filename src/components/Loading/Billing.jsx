import ServicesCard from "./ServicesCard";
import styles from "../../style";
import { DIFM_LLC_BusinessConsulting, DIFM_LLC_FinanceConsulting, DIFM_LLC_FullIT_Service,DIFM_LLC_Tech_service } from "../../assets"

export const services = [
  {
    id: "feed-1",
    logo: DIFM_LLC_BusinessConsulting,
    title: "Finance Consulting",
    content:
      "DO IT FOR ME LLC offers Finance Consulting services to Merchants, Lenders/Funders/Investors, and other businesses seeking expert guidance on financial matters.",
    
  },
  {
    id: "feed-2",
    logo: DIFM_LLC_FinanceConsulting,
    title: "Business Consulting",
    content:
      "DO IT FOR ME LLC provides Business Consulting to Merchants, Lenders/Funders/Investors, and other businesses.",
    
  },
  {
    id: "feed-3",
    logo: DIFM_LLC_Tech_service,
    title: "Full IT Services",
    content:
      "We are a full-service IT company offering a range of services, including software development, web design, and IT support.",
    
  },
  
];

const Billing = () => (
  <div className="mt-0 sm:mt-14 mb-0 sm:mb-32">
    <h1 className={`${styles.heading2}  text-[35px] sm:text-[50px] leading-[28px]  text-center mb-8  `} id="services" data-aos = "zoom-in" data-aos-duration = "2000">Services</h1>
    <p className='text-white text-center px-2 sm:w-[520px] text-[18px] mx-auto gl:w-[360px]  mb-14 sm:-mt-8 ' data-aos = "zoom-in" data-aos-duration = "2000">
       Our services are designed to help businesses optimize their operations, minimize risk, and drive sustainable growth..
      </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 ss:grid-cols-1 lg:grid-cols-3 gap-6">
      {services.map((card) => <ServicesCard key={card.id} {...card} />)}
    </div>
    </div>
    
);

export default Billing;
