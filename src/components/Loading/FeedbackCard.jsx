import { quotes } from "../../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="ss:mx-auto xs:mx-auto sm:w-[95%] sm:mx-auto md:w-[100%] flex  justify-between  sm:mx-4 border-2 border-cyan-200 hover:border-none flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-1 sm:mr-5 mr-0 my-5 feedback-card" data-aos = "fade-up" data-aos-duration = "2000">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins  font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row ">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
