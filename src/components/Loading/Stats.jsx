import { Link } from "react-router-dom";
import { onenumber, sevennumber } from "../../assets";
import { number_1, number_7 } from "../../assets";
import styles from "../../style";

const Stats = () => (
  
  <div className="grid grid-cols-1 sm:grid-cols-2 ss:grid-cols-2 gap-4 h-16 mb-32 xs:-mt-32 ss:-mt-32 -mt-28 sm:-mt-32 ss:ml-2 md:mt-32 lg:ml-20 xl:ml-0 ml-0 sm:mb-0 " data-aos = "fade-up" data-aos-duration = "2000">
  <div className={`w-[auto] h-[auto] rounded-full ${styles.flexCenter} mt-2 mb-4 z-10 absolute hidden sm:block`} style={{'marginLeft':'128px','marginTop':'-101px'}}>
    <img src={number_1} alt="star" className="w-[250%] h-[116px] sm:h-[160%] sm:mt-0 mt-12 object-contain  mb-2 " />
  </div>
    <div className="bg-black-gradient p-2 rounded-[20px] flex flex-row sm:w-[365px] w-auto hidden sm:block md:w-[522px]">

  <div className="flex-1 flex flex-col ml-3 relative">
    <h4 className="font-poppins font-semibold text-white text-[18px] mt-4">
    We're the first <Link to='/build_to_assist'><span className="text-cyan-400">B2A</span></Link> company on the internet.
    
    </h4>
  
  </div>
    </div>


    {/* mobile view */}
    <div className={`bg-black-gradient  flex flex-row ss:w-[310px] mt-4 w-[100%] sm:w-[358px] mx-auto rounded-[20px] feature-card block sm:hidden px-2.5 py-1`}>
    <div className={`w-[50px] h-[50px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={number_1} alt="star" className="w-[120%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[15px] leading-[23.4px] mt-1">
      We're the first <Link to='/build_to_assist'><span className="text-cyan-400">B2A</span></Link> company on the internet.
      </h4>
      {/* <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p> */}
    </div>
  </div>
    {/* mobile view */}



      {/* second column */}
      <div className="bg-black-gradient p-2 rounded-[20px] flex flex-row w-auto sm:w-[378px] md:w-[529px] hidden sm:block ">
      <div className={`w-[auto] h-[auto] rounded-full ${styles.flexCenter} mt-2 mb-4 z-10 absolute`} style={{'marginLeft':'128px','marginTop':'-131px'}}>
      <img src={number_7} alt="star" className="w-[250%]    h-[130px] sm:h-[160%] sm:mt-0 mt-12 object-contain  mb-2" />
    </div>
    <div className="bg-black-gradient p-2 rounded-[20px] flex flex-row w-auto sm:w-[365px] md:w-[522px]">
 
 <div className="flex-1 flex flex-col ml-3 relative">
   <h4 className="font-poppins font-semibold text-white text-[18px] mt-2">
   We've created 7 free <Link to='/digital_information_platform'><span className="text-cyan-400">DIPs</span></Link> for public access
   </h4>
 
 </div>
   </div>

      </div>
       {/* mobile view */}
    <div className={`bg-black-gradient  w-[100%] sm:w-[358px] ss:w-[310px] mx-auto flex flex-row p-6 rounded-[20px] feature-card block sm:hidden px-2.5 py-1 mt-4`}>
    <div className={`w-[50px] h-[50px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={number_7} alt="star" className="w-[120%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[15px] leading-[23.4px] mt-1">
      We've created 7 free <Link to='/digital_information_platform'><span className="text-cyan-400">DIPs</span></Link> for public access
      </h4>
      {/* <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p> */}
    </div>
  </div>
    {/* mobile view */}
      {/* second column end */}
 
    </div>

);

export default Stats;