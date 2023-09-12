import React from 'react';
import { useState, useEffect } from 'react';
import styles from "../../style";
import { Link } from 'react-router-dom';
import { phonecall, emails, location, sends } from '../../assets';

const Contect_module = () => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  const baseUrl = "http://localhost:8000";

  const sendEmail = async(e) => {
    e.preventDefault();
  if (username== "" || email == "" || message == "") {
    setallForm("Form must be filled out");
    return false;
  }else {
  
    let dataSend = {
      email: email,
      username: username,
      message: message,
    };

    const res = await fetch(`${baseUrl}/emails/sendEmails`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(
       alert("Thank you for connecting with us!")
     )};
};
  
  return (
    <>
      <div className='sm:mt-8'>
        <div className="mx-4 flex flex-col md:flex-row">
          <div className="md:w-1/2" data-aos = "fade-right" data-aos-duration = "2000">
            {/* Contact Us */}
            <div className="p-8 bg-gradient border-2 border-cyan-200 xs:w-[420px] sm:mx-auto sm:mx-auto xs:mx-auto hover:border-none w-[auto] sm:w-[578px] md:w-[450px] lg:w-[588px]  mx-auto rounded-[20px] mb-4  sm:bg-blue-gradient feedback-card">
              <div className="flex items-center">
                <img src={emails} alt="Contact Us" className="w-[40px] -mx-4 sm:mx-4 mr-4" />
                <div>
                  <h3 className="text-xl text-gray-300 font-bold mb-2">Contact Us</h3>
                  <p className="text-gray-400">Please feel free to drop us a line. We will respond as soon as possible.</p>
                  <a href="#contact" >
                  <div className="flex">
                    <p  className="text-cyan-400">Leave a message&nbsp;</p>
                    <img src={sends} alt="send" className="mt-1" />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Call any time */}
            <div className="p-8 bg-gradient border-2 border-cyan-200 xs:w-[420px] xs:mx-auto sm:mx-auto hover:border-none w-[auto] sm:w-[578px]  md:w-[450px] lg:w-[588px] mx-auto rounded-[20px] mb-4 max-sm sm:bg-blue-gradient feedback-card">
              <div className="flex items-center">
                <img src={phonecall} alt="Call Any Time" className="w-[40px] -mx-4 sm:mx-4 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Call any time</h3>
                  <p className="text-gray-500">If you need immediate assistance feel free to call us any time.</p>
                  <p className="text-cyan-500"><a href="tel:+1 917-745-9305">+1 917-745-9305</a></p>
                </div>
              </div>
            </div>
            {/* Visit us */}
            <div className="p-8 bg-gradient border-2 border-cyan-200 xs:w-[420px] mx-auto xs:mx-auto sm:mx-auto hover:border-none w-[auto] sm:w-[578px] md:w-[450px] lg:w-[588px]  rounded-[20px] mb-4 max-sm sm:bg-blue-gradient feedback-card" >
              <div className="flex items-center">
                <img src={location} alt="Visit Us" className="w-[40px] -mx-4 sm:mx-4 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Visit us</h3>
                  <p className="text-gray-500">30 N Gould St, Sheridan, WY 82801, United States</p>
                  <a href="https://goo.gl/maps/bPyuUeMTL2Ry7BuB8">
                  <div className="flex">
                    <p className="text-cyan-400">Get direction&nbsp;</p>
                    <img src={sends} alt="send" className="mt-1" id="contact"/>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2" data-aos = "fade-left" data-aos-duration = "2000">
            {/* Map */}
            <div className="mt-5 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14234.678331540266!2d81.0018291!3d26.882237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be34af2e0d36f%3A0x13fc545254663b45!2sDo%20It%20For%20Me%20LLC!5e0!3m2!1sen!2sin!4v1691057729654!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-[20px]  sm:h-[500px] mx-auto w-[101%] xs:w-[380px] mx-auto md:w-full ss:mx-auto sm:mx-auto  xs:mx-auto sm:w-[578px]  md:w-[578px]"
              ></iframe>

            </div>
          </div>
        </div>
        <h1 className={`${styles.heading2} text-[35px] leading-[28px] text-center  sm:text-[50px] mb-14  mt-14 sm:mt-24`}  data-aos = "zoom-in" data-aos-duration = "2000">Contact Us</h1>
        <div class="isolate mx-4  bg-discount-gradient px-6 py-24 sm:py-12 lg:mx-auto lg:w-[1200px] rounded-[20px] mb-14 sm:mb-32 " data-aos = "fade-up" data-aos-duration = "2000">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
          </div>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-2xl font-poppins font-normal tracking-tight text-white sm:text-4xl sm:mt-0 -mt-14">Leave Us a Message</h2>
            <p class="mt-4 text-lg leading-8 text-white">Please feel free to drop us a line. We will respond as soon as possible.</p>
          </div>
          <form method="POST" class="mx-auto mt-16 max-w-xl sm:mt-14" onSubmit={sendEmail}>
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block text-sm font-semibold leading-6 text-white">Full name<span className='text-red-700'> *</span></label>
                <div class="mt-2.5">
                  <input type="text" name="name" id="name" onChange={(e) => setUsername(e.target.value)} placeholder='Enter your full name' autocomplete="given-name" class="mb-1 block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required />
                  <span id='nm' className='text-red-700 font-medium'></span>
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Email<span className='text-red-700'> *</span></label>
                <div class="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="mb-1 block w-full bg-discount-gradient rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    required
                  />

                  <span id='mail' className='text-red-700 font-medium'></span>
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold leading-6 text-white">Message<span className='text-red-700'> *</span></label>
                <div class="mt-2.5">
                  <textarea name="message" id="message" onChange={(e) => setMessage(e.target.value)} rows="4" placeholder='Message...' className="block bg-discount-gradient w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6" required></textarea>
                </div>
              </div>
              <div class="flex gap-x-4 sm:col-span-2">
                <div class="flex h-6 items-center">
                  <input type="checkbox" id='confirm' class="bg-cyan-100 flex w-8 flex-none required cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400" role="switch" aria-checked="false" aria-labelledby="switch-1-label" required />
                </div>
                <label class="sm:text-sm text-[11px] leading-6 text-white -mx-4" id="switch-1-label">
                  I agree to the term and conditions
                  <a href="/privacy" class="font-semibold text-cyan-200 ">&nbsp;privacy&nbsp;policy</a>.
                </label>
              </div>
            </div>
            <div class="mt-10">
              <button id="sendemail" class="block w-full rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contect_module;
