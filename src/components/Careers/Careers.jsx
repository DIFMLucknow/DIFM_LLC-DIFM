import React, { useState } from "react";
import styles from "../../style";
import {
    DIFM_LLC_FinanceConsulting,
    DIFM_LLC_Investor_service,
    DIFM_LLC_Tech_service,
    DIFM_LLC_Marketing_service,
    DIFM_LLC_FullIT_Service,
    DIFM_LLC_Network_service,
} from "../../assets";
import { Link } from "react-router-dom";

import Testimonial_video from "../Loading/Testimonial_video";
import { Testimonial } from "../../constants";

const servicesData = [
    {
        id: 1,
        image: DIFM_LLC_FinanceConsulting,
        title: "Web Developer",
        category: "jobs",
        content:
            "We offer a range of business solutions to help merchants optimize their operations and drive growth.",
    },
    {
        id: 2,
        image: DIFM_LLC_Investor_service,
        title: "Creative Design",
        category: "jobs",
        content:
            "We provide expert guidance and analysis to help lenders, funders, and investors make informed decisions.",
    },
    {
        id: 3,
        image: DIFM_LLC_Network_service,
        title: "Finance",
        category: "jobs",
        content:
            "Become part of a global community committed to making a difference.",
    },
    {
        id: 4,
        image: DIFM_LLC_FullIT_Service,
        title: "Full Stack Developer",
        category: "internship",
        content:
            "Our strategy development services help businesses develop and implement effective strategies for growth and competitive advantage.",
    },
    {
        id: 5,
        image: DIFM_LLC_Tech_service,
        title: "Backend Developer",
        category: "internship",
        content:
            "We are a full-service IT company offering a range of services, including software development, web design, and IT support.",
    },
    {
        id: 6,
        image: DIFM_LLC_Marketing_service,
        title: "Web Developer",
        category: "internship",
        content:
            "Our marketing and branding services help businesses develop and implement effective marketing strategies to drive brand awareness, customer engagement, and revenue growth.",
    },
    {
        id: 4,
        image: DIFM_LLC_FullIT_Service,
        title: "Marketing",
        category: "training",
        content:
            "Our strategy development services help businesses develop and implement effective strategies for growth and competitive advantage.",
    },
    {
        id: 5,
        image: DIFM_LLC_Tech_service,
        title: "Software Development",
        category: "training",
        content:
            "We are a full-service IT company offering a range of services, including software development, web design, and IT support.",
    },
    {
        id: 6,
        image: DIFM_LLC_Marketing_service,
        title: "UI/UX Design",
        category: "training",
        content:
            "Our marketing and branding services help businesses develop and implement effective marketing strategies to drive brand awareness, customer engagement, and revenue growth.",
    },
    {
        id: 4,
        image: DIFM_LLC_FullIT_Service,
        title: "web Development",
        category: "education",
        content:
            "Our strategy development services help businesses develop and implement effective strategies for growth and competitive advantage.",
    },
    {
        id: 5,
        image: DIFM_LLC_Tech_service,
        title: "WordPress",
        category: "education",
        content:
            "We are a full-service IT company offering a range of services, including software development, web design, and IT support.",
    },
    {
        id: 6,
        image: DIFM_LLC_Marketing_service,
        title: "Mern Stack",
        category: "education",
        content:
            "Our marketing and branding services help businesses develop and implement effective marketing strategies to drive brand awareness, customer engagement, and revenue growth.",
    },
];

const Careers = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const filteredServices =
        activeCategory === "all"
            ? servicesData
            : servicesData.filter((service) => service.category === activeCategory);


    // Testimonial Video 
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleVideoPlay = (id) => {
        setCurrentVideo(id);
    };
    
    // Testimonial Video end 

    return (
        <div>
            <div className="mt-4">
                <h1 className="text-white font-poppins font-normal  text-[35px] leading-[28px] text-center mb-8 sm:text-[50px]">
                    Careers at DIFM
                </h1>
                <p className="mt-4 text-white text-center m-auto  text-[18px] xl:text-[20px] xl:mx-80 ">
                Welcome to DIFM Careers! We're a community dedicated to nurturing talent and building strong career foundations in data, investment, finance, and marketing. Join us and shape the future of B2B services. Explore our opportunities now!
                </p>
                <div className="flex flex-wrap sm:justify-start md:mx-48 mt-8 justify-center w-full feedback-container relative xl:mx-20">
                    <button
                        className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[170px]  max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === "all"
                            ? "bg-blue-gradient"
                            : "text-white bg-black-gradient-2"
                            }`}
                        onClick={() => handleCategoryChange("all")}
                    >
                        <p className="font-poppins font-normal text-[20px] leading-[24px] text-center font-bold tracking-wide -mt-2 ">
                            All
                        </p>
                    </button>
                    <button
                        className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === "jobs"
                            ? "bg-blue-gradient"
                            : "text-white bg-black-gradient-2"
                            }`}
                        onClick={() => handleCategoryChange("jobs")}
                    >
                        <p className="font-poppins font-normal text-[20px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                            Jobs
                        </p>
                    </button>
                    <button
                        className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === "internship"
                            ? "bg-blue-gradient"
                            : "text-white bg-black-gradient-2"
                            }`}
                        onClick={() => handleCategoryChange("internship")}
                    >
                        <p className="font-poppins font-normal text-[20px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                            Internships
                        </p>
                    </button>
                    <button
                        className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === "training"
                            ? "bg-blue-gradient"
                            : "text-white bg-black-gradient-2"
                            }`}
                        onClick={() => handleCategoryChange("training")}
                    >
                        <p className="font-poppins font-normal text-[20px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                            Training Program
                        </p>
                    </button>
                    <button
                        className={`flex justify-between flex-col px-10 py-5 rounded-[20px]  max-w-[438px] max-h-[50px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === "education"
                            ? "bg-blue-gradient"
                            : "text-white bg-black-gradient-2"
                            }`}
                        onClick={() => handleCategoryChange("education")}
                    >
                        <p className="font-poppins font-normal text-[20px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                            Free Education
                        </p>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2.5  ">
                    {filteredServices.map((service) => (
                        <div
                            key={service.id}
                            className="flex justify-between  flex-col px-10 py-12 rounded-[20px] w-[370px] h-[520px] md:mr-10 sm:mr-5 mr-0 my-5 bg-black-gradient-2 rounded-[20px] box-shadow hover:border-2 hover:w-[374px] border-cyan-200"
                        >
                            <img
                                src={service.image}
                                alt="servicecate"
                                className="w-[370px] h-[175px] -mt-12 -mx-10 absolute  rounded-t-[20px]"
                            />

                            <p className="font-poppins font-normal text-[22px] leading-[24px] text-white text-center font-bold tracking-wide  mt-40">
                                {service.title}
                            </p>
                            <p className=" text-justify  text-[16px] sm:text[18px] leading-[27.4px] text-gray-200 my-4 ">
                                {service.content}
                            </p>

                            <div className="flex flex-row">
                                <div className="flex flex-col ml-4 ">
                                    <Link to={"/contact"}>
                                        <button
                                            type="button"
                                            className={`mx-14 py-4 px-6 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
                                        >
                                            Contact Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Video Testimonial  */}

                <h5
                    className={`${styles.heading2} mt-10 font-poppins font-semibold  text-[20px] text-white ss:leading-[45.8px] leading-[35px] w-full sm:text-[28px] mx-0`}
                >
                    Hear our Team's Review and feedback <br className="sm:block hidden" />
                    From Seekers & Employers
                </h5>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2.5 sm:justify-start justify-center w-full relative  mx-0 sm:mx-6 mb-8 mt-8">
                        {Testimonial.map((card) => (
                            <div
                                key={card.id}
                                className="relative overflow-hidden"
                                style={{
                                    height:
                                        currentVideo === card.id ? 'auto' : `${card.height}px`,
                                    transition: 'height 0.3s ease',
                                }}
                            >
                                <Testimonial_video {...card} onPlay={handleVideoPlay} />
                            </div>
                        ))}
                    </div>
                    <div class="mt-10 mb-14">
       <button type="submit" onClick={() => loadMore()}  className="block w-[200px] sm:w-[200px] mx-auto rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Load More</button>
    </div>
                </div>

            </div>
        </div>
    );
};

export default Careers;


