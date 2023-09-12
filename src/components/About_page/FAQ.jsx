import React, { useState } from "react";
import styles from "../../style";
import { team } from "../../constants";
import Our_Team from "./Our_Team";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What does "DO IT FOR ME LLC" do?',
      answer:
        "We provide backend operation support for a wide range of businesses. Our team consists of experts in several fields, including underwriting in the lending industry, technical project management, website design, and digital marketing. We also build and operate various digital information platforms and are passionate about providing solutions for real-world problems.",
    },
    {
      question: "What does DIFM stand for?",
      answer:
        "DIFM stands for Data Investments Finance and Marketing, symbolizing our core competencies in various areas of business support.",
    },
    {
      question: "What kind of businesses does DO IT FOR ME LLC support?",
      answer:
        "We support all kinds of businesses, with particular expertise in underwriting for the lending industry, technical project management, website design, and digital marketing.",
    },
    {
      question:
        "What are build to assist (B2A) and digital information platforms (DIP)?",
      answer:
        " B2A and DIP are acronyms for the different types of platforms we create. Build to Assist refers to our innovative projects that aim to assist people/businesses with their needs. Digital Information Platforms are web platforms that offer valuable information to users across various domains.",
    },
    {
      question:
        "Can you give examples of some digital information platforms (DIP) you've created?",
      answer:
        "Some of our DIPs include World Model Hunt, Employ Woman, A Health Place, Layman Litigation, WMH India, Brag Social, Earth by Humans, and Aeroway.one.",
    },
    {
      question: "How can I get in touch with DO IT FOR ME LLC?",
      answer:
        " You can contact us via the 'Contact Us' form on our website, email, or phone. Our team is always ready to assist with your needs.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} w-[90%] mx-auto xs:w-[90%] xs:mx-auto ss:w-[90%] ss:mx-auto sm:w-[90%] sm:mx-auto md:w-[100%] lg:w-[94%] xl:w-[100%] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow sm:-mt-8 md:mt-0 lg:mt-0 xl:mt-0`}
        data-aos = "fade-up" data-aos-duration = "2000"
      >
        {/* new section add */}
        <div className="max-w-4xl mx-auto flex-1 flex flex-col">
          <h3 className={styles.heading2}>FAQ’s</h3>
          {questions.map((q, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center  bg-gray-200 hover:bg-gray-300 bg-discount-gradient rounded-lg px-4 py-2 focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className={`${styles.paragraph} ml-2 text-[15px]`}>
                  {q.question}
                </span>
                <svg
                  className={`w-4 h-4 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#07a3c3"
                    fillRule="evenodd"
                    d="M10 13.333l5-5-1.414-1.414L10 10.504l-3.586-3.577L5 8.333l5 5z"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg bg-faq">
                  <p className="text-white">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* new section end */}
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
         <Link to={"/contact"}> <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[13px] text-primary bg-blue-gradient rounded-[10px] sm:text-[16px]  outline-none ${styles}`}
          >
            Inquire Now
          </button></Link>
        </div>
      </section>

    </div>
  );
};

export default FAQ;
