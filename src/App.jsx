import styles from "./style";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Services_module from "./components/Services/Services_module";
import Hero from "./components/Loading/Hero";
import Contect_module from "./components/Contect/Contect_module";
import Term_and_condition from "./components/Termsandcondition/Term_and_condition";
import Privacy_module from "./components/Privacy_policy/Privacy_module";
import Careers from "./components/Careers/Careers";
import About from "./components/About_page/About";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import CTA from "./components/common/CTA";
import Clients from "./components/common/Clients";
import Default_page from "./components/Default_page";
import Team_page from "./components/Team/Team_page";
import Portfolio from "./components/Portfolio/Portfolio";
import Subscribe from "./components/common/Subscribe";
import AnimatedCursor from "react-animated-cursor";
import Investor_Relations from "./components/Investor_Relations/Investor_Relations";
import Admin_login from "./components/Admin/Admin_login";
import Difmllc_dashboard from "./components/Admin/Difmllc_dashboard";
import AOS from "aos";
import Build_To_Assist from "./components/B2A/Build_To_Assist";
import Digital_Information_Platform from "./components/DIP's/Digital_Information_Platform";
import "aos/dist/aos.css";
AOS.init();


const App = () => (
  <div className="bg-primary w-full overflow-hidden">


{/* cursor code */}
    <AnimatedCursor
      innerSize={10}
      outerSize={50}
     color='51, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> 

   <Router>
       <div className={`${styles.paddingX} ${styles.flexCenter} shadow-lg  fixed w-full top-0 z-20`} id="headrs">
         <div className={`${styles.boxWidth} mt-4`}>
           <Navbar />
         </div>
       </div>
    <div className={`bg-primary ${styles.flexStart} mt-32`}>
      <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services_module />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/contact" element={<Contect_module />} />
            <Route path="/term" element={<Term_and_condition />} />
            <Route path="/privacy" element={<Privacy_module />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team_page />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/admin" element={<Admin_login />} />
            <Route path="/difmllc_dashboard" element={<Difmllc_dashboard />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/investor" element={<Investor_Relations />} />
            <Route path="/build_to_assist" element={<Build_To_Assist />} />
            <Route path="/digital_information_platform" element={<Digital_Information_Platform />} />
            <Route path="/*" element={<Default_page />} />
          </Routes>
        
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <CTA />
        <Subscribe />
        <Footer />
      </div>
    </div>
  </Router>
  </div>
  
);

export default App;