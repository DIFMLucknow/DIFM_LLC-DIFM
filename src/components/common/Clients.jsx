import { clients } from "../../constants";
import styles from "../../style";
import "../../index.css";

const Clients = () => (
  <div className="mt-10">
<div class="inline-flex items-center justify-center w-full mt-5">
<hr class="w-[12px] h-3 my-8 bg-gray-200 border-0 rounded-full bg-black-gradient-2"/>
    <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded bg-black-gradient-2"/>
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 bg-discount-gradient rounded-[10px] text-white">
    Brands & Partners
    </div>
    <hr class="w-[12px] h-3 my-8 bg-gray-200 border-0 rounded-full bg-black-gradient-2"/>
</div>



<section className={`${styles.flexCenter} my-4 -mt-4 `}>
    
<section class="logoMarqueeSection">
	<div class="container" id="logoMarqueeSection">
		<div class="default-content-container flex items-center">
			<div class="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block ml-16  w-[1300px] mt-6">
      <div class="marquee" style={{animationDuration:"47s"}}>

      {clients.map((client) => (	
					<a target="_blank" className="relative client-img"><img src={client.logo} title="" class="marqueelogo object-contain  hover:opacity-100" style={{width:"192px",height:"40px",maxWidth:"none", }}/></a>				
         ))}
      	</div>
        <div class="marquee" style={{animationDuration:"47s"}}>

          
          
      {clients.map((client) => (
					<a target="_blank" className="relative client-img"><img src={client.logo} title="" class="marqueelogo object-contain  hover:opacity-100" style={{width:"192px",height:"40px",maxWidth:"none"}}/></a>			
         ))}
      
      </div>
      </div>
	</div>
  </div>
</section>

	
</section>
  </div>
);

export default Clients;