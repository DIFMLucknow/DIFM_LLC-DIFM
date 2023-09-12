import React, { useState } from 'react';
import styles from '../../style';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../../firebase';
import { serverTimestamp } from "firebase/firestore";



function Subscribe() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const baseUrl = "http://localhost:8000";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError(false); // Reset error state when user starts typing
  };

 const handleSubscribe = async() => {
    const emailRegex = /\S+@\S+\.\S+/; // Email regex pattern

    if(!email){
      setError(true); // Set error state if email is null
      alert("Please Enter Your Email!");
    }
    else{
      if (!emailRegex.test(email)) {
        setError(true); // Set error state if email is invalid
        alert("Please enter a valid email address.");
      } else {
        setSubscribed(true);
        addDoc(collection(db, "subscribed_users"),{
          email:email,
          date: serverTimestamp()
        }).then(()=>{
          alert('Thank you for subcribing');
        }).catch((err)=>{
          alert(err);
        })
      }
     }
   
   let dataSend = {
    email: email,
  };

  const res = await fetch(`${baseUrl}/emailss/sendEmailSubs`, {
    method: "POST",
    body: JSON.stringify(dataSend),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    // HANDLING ERRORS
    .then((res) => {
      console.log(res);
      if (res.status > 199 && res.status < 300) {
        alert("Send Successfully !");
      }
    });

  };

  return (
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        {subscribed
          ? "Thank you for subscribing!"
          : "Enter your email to subscribe to our newsletter"}
      </p>

      <div className="flex flex-row md:mt-0 mt-6  ">
        {!subscribed && (
          <>
            <input
              type="email"
              id='email_field'
              className={`bg-white text-black font-poppins w-[146px] sm:w-[220px] font-medium py-2 px-2 sm:px-4 rounded-l-lg${error ? " border-red-500" : ""}`}
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              type="button"
              className={`py-4 px-6 font-poppins font-medium text-[18px] w-[128px] sm:w-[150px] text-primary bg-blue-gradient rounded-r-lg outline-none ${styles}`}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Subscribe;