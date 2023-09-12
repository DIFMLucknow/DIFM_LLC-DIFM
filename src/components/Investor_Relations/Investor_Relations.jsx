import React from 'react'
import { useState } from 'react';
import styles from '../../style'
import { Link } from 'react-router-dom'
import Upcoming_projects from "../Portfolio/Upcoming_projects";
import { DIFM_LLC_whychoose_us } from '../../assets'
import { layout } from '../../style'
import Button from '../Services/Button'

import { investors_review } from '../../constants'
import FeedbackCard from '../Loading/FeedbackCard'
const Investor_Relations = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');
  const [interested, setInterested] = useState('');
  const [formErr, setFormErr] = useState("");
  const [allForm, setallForm] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [phoneErr, setphoneErr] = useState("");
  const [condition,setCondition] = useState("false");

  const baseUrl = "http://localhost:8000";

  // on change validation
    const  handleName = (e) => {
      console.log(name);
      var letters = /^[A-Za-z ]+$/;
      setName(e.target.value);
      if(!letters.test(name)){
        setFormErr("Name is invalid")
        if(name==""){
              document.getElementById("nameErr").textContent = "";
      
            }
            setCondition(true);
      }
      else if(letters.test(name)){
        setFormErr(" ")
      }
      
  
    
    }

    const  handleEmail = (e) => {
      var mail_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // var mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmail(e.target.value);
      console.log(email);
      if(!mail_re.test(email)){
        setemailErr("Email is invalid")
        
        if(email==""){
              document.getElementById("emailErr").textContent = "";
      
            }
            setCondition(true);
      }
      else if(mail_re.test(email)){
        setemailErr(" ")
      }
     
      
    }

    const  handleMobile = (e) => {
      var phoneRGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{5})$/;
      setMobile(e.target.value);
      if(!phoneRGEX.test(mobile)){
        setphoneErr("mobile no. is invalid")
        
        if(mobile==" "){
              document.getElementById("mobileErr").textContent = "";
      
            }
            setCondition(true);
      }
      else if(phoneRGEX.test(mobile)){
        setphoneErr(" ")
      }
      
      // else{
      //  setphoneErr("mobile no. is invalid");
      // }
    }
   //sent email for contect
   const sendemail = async(e) => {
    var invest = document.getElementById("invests");
    var contect = document.getElementById("contect");
    e.preventDefault();
    if (name == "" || email == "" || message == "" || mobile == "" || interested == "") {
      setallForm("Form must be filled out");
      return false;
    }else {
      !condition 

      let dataSend = {
        username: name,
        email: email,
        number: mobile,
        message: message,
        interested:interested
      };

      await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Thank you for connecting with me!");
          console.log("sent mail");
          invest.style.display = "block";
          contect.style.display = "none";
        }
      }).catch((err)=>{
        alert(err);
       }) 
    }
   
  }
  
  return (
    <div>
     <h1 className="mt-8 text-white font-poppins font-normal text-[35px] leading-[28px] text-center mb-8 sm:text-[50px]" data-aos = "zoom-in" data-aos-duration = "2000">
     Investor Relations
      </h1>
      <p className="text-center font-poppins px-3  mt-12 text-white sm:mx-12  xl:mx-40 lg:text-[18px] lg:text-[16px]" data-aos = "zoom-in" data-aos-duration = "2000">
      Our experience and expertise cover a vast spectrum, encompassing Data, Investments, Finance, and Marketing, as well as innovative Build to Assist (B2A) and Digital Information Platforms (DIP).
      </p>

     {/* invest now section add */}
     <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mx-2 sm:flex-row gl:w-[330px] md:w-[1080px] lg:w-[1200px] sm:mx-12 md:mx-auto lg:mx-auto flex-col bg-black-gradient-2 rounded-[20px] box-shadow mx-auto `} data-aos = "fade-up" data-aos-duration = "2000">
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-[22px] leading-[45px] sm:text-[40px]`}>Let’s invest Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] text-[15px] sm:text-[17px] mt-5 text-justify`}>
      We're dedicated to delivering transformative results that exceed expectations. Invest in DO IT FOR ME LLC today and be a part of the future of innovation.
      </p>
    </div>
      

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to={"/contact"}
      
      >
      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Inquire Now 
     </button> 
     </Link>
    </div>
   
  </section>
     {/* invest now section end */}

     {/* invest now section add */}
     <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} hidden sm:flex-row flex-col lg:w-[1180px] lg:mx-auto bg-green-800 text-green-400 rounded-[20px] box-shadow mx-auto sm:mx-16`} id='invests'>
     <p className={`${styles.paragraph} text-[16px]  text-dimwhite leading-[25px] sm:leading-[35px] sm:text-[18px]`}>
      Thank you for connecting with us. Our team will email you back within 3-5 working days. In case of any queries, please feel free to reach us at info@difm.llc
      </p>
  </section>
     {/* invest now section end */}


    {/* investor interest form Start */}
   
<div class="isolate mx-10  bg-black-gradient-2 lg:mx-auto  py-24 sm:py-12 mx-2  lg:w-[1200px] gl:w-[330px] rounded-[20px] mx-auto " id='contect' data-aos = "fade-up" data-aos-duration = "2000">
  <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
  </div>
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-2xl font-poppins font-normal tracking-tight text-white sm:text-4xl sm:mt-0 -mt-14">Investor Interest Form</h2>
    <p class="mt-4 text-lg leading-8 text-white">Please fill out the form below to express your interest in investing with DO IT FOR ME LLC.</p>
  </div>
  <form method="POST" class="mx-auto sm:mx-14 md:mx-44 mx-4 lg:ml-48 mt-16 max-w-xl sm:mt-14">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 sm:w-[660px] md:w-[800px] w-[auto]">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-white">Full name<span className='text-red-700'> *</span></label>
        <div class="mt-2.5">
          <input type="text" name="name" value={name}  pattern="[a-zA-Z]+" id="name" onChange={handleName} placeholder='Enter Your full name' autocomplete="given-name" class="block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required/>
          <span className='text-red-600' id='nameErr'>{formErr}</span>
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Email<span className='text-red-700'> *</span></label>
        <div class="mt-2.5">
          <input type="email" name="email"  pattern=".+@gmail\.com" id="email" value={email} onChange={handleEmail} placeholder='Enter Your Email' autocomplete="family-name" class="block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required/>
          <span className='text-red-600' id='emailErr'>{emailErr}</span>
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Phone<span className='text-red-700'> *</span></label>
        <div class="mt-2.5">
          <input type="tel" name="mobile" pattern="[0-9]{10}" id="mobile" value={mobile} onChange={handleMobile} placeholder='Enter Your Phone No.' autocomplete="family-name" class="block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required/>
          <span className='text-red-600' id='mobileErr'>{phoneErr}</span>
        </div>
      </div>
      <div>
       <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Interested In<span className='text-red-700'> *</span></label>
        <div class="mt-2.5">
            <select name='Interested_In' value={interested} onChange={(e) => setInterested(e.target.value)} autocomplete="family-name" class="block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required>Select Investment type
            <option selected className='bg_investform'>Select Your Interest</option>
            <option className='bg_investform'>Technology</option>
            <option className='bg_investform'>Finance</option>
            <option className='bg_investform'>Healthcare</option>
            <option className='bg_investform'>Education</option>
            <option className='bg_investform'>Media and Entertainment</option>
            </select>
            

        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-white">Message<span className='text-red-700'> *</span></label>
        <div class="mt-2.5">
          <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}   rows="4" placeholder='Message...' className="block bg-discount-gradient w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"></textarea>
        </div>
        <span className='text-red-600 mt-2'>{allForm}</span>
      </div>
      <div class="flex gap-x-4 sm:col-span-2">
        <div class="flex h-6 items-center">
          
          <input type="checkbox" class="bg-cyan-100 flex w-8 flex-none required cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label" required/>
   
        </div>
        <label class="sm:text-sm text-[11px] leading-6 text-white -mx-4" id="switch-1-label">
          I agree to the term and conditions
          <a href="/privacy" class="font-semibold text-cyan-200 ">&nbsp;privacy&nbsp;policy</a>.
        </label>
      </div>
      
    </div>
    <div class="mt-10">
      <button type="submit"  onClick={sendemail}  class="block w-full sm:mx-16 mx-0  rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Submit</button>
    </div>
  </form>
</div>
    {/* investor interest form end */}
    
 {/* investor interest card start */}
    <section className={`${layout.section} mt-14 lg:px-14 px-0 xl:px-0`}>
    <div className={layout.sectionInfo} data-aos = "fade-right" data-aos-duration = "2000">
      <h2 className={`${styles.heading2} text-[35px] mx-4 leading-[42px] sm:text-[45px]`}>
      Why You Should Chose Us?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mx-4`}>
        At DO IT FOR ME LLC, we are more than just a business operations team. We are innovators, problem-solvers, and passionate creators dedicated to helping businesses navigate complex landscapes and effect positive change in the world.<br /><br />

        Our team's expertise covers a vast spectrum, and our services are customized to meet the unique needs of each client. We pride ourselves on our creativity, adaptability, and commitment to excellence, reflected in our expansive portfolio of successful projects.  
      </p>
      <Link to='/about'>
      <button type="button" className={`py-4 mt-10 mx-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
         Know More
      </button>
      </Link>
    </div>

    <div className={layout.sectionImg} data-aos = "fade-left" data-aos-duration = "2000">
      <img src={DIFM_LLC_whychoose_us} alt="billing" className="w-[70%] h-[100%]  ss:w-[100%] sm:w-[100%] md:[100%]" />
    </div>
  </section>
 {/* investor interest card end */}

{/* Upcoming_projects  */}

<Upcoming_projects />


 {/* investor interest testmonial start */}
       <h2 className={`${styles.heading2} mt-10 ml-2 w-[92%] xs:mx-4 xs:text-[32px] font-poppins font-semibold  text-[20px] text-white  lg:mx-16 xl:mx-4  ss:leading-[45.8px] leading-[35px] w-full sm:text-[38px] mx-0`} data-aos = "fade-right" data-aos-duration = "2000">
       Review and feedback from Our <br className="sm:block hidden" /> Investors
      </h2>
      
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:w-[395px] xs:mx-auto mt-8 gl:w-[340px] gl:mx-auto sm:w-[800px] md:w-[900px] lg:w-[1216px] sm:justify-start justify-center w-[310px] feedback-container relative z-[1]">
      {investors_review.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
 {/* investor interest testmonial end */}

    </div>
  )
}

export default Investor_Relations
