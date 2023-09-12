import React, { useState } from 'react';
import styles from '../../style';
import { Team_gallerydata } from '../../constants';
import { upcoming_projectdata } from '../../constants';
import { Link } from 'react-router-dom';
import { services } from '../Loading/Billing';


const Team_gallery = () => {

    const [limit, setLimit] = useState(6);
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const [getCat, setCat] = useState(true);
    const loadMore = () => {
        setLimit(limit + limit);
    }

    const slice = upcoming_projectdata.slice(0, limit);
 

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        console.log(category);
        if(activeCategory=='all'){
            setCat(false);

        }
        
        if(category=='all'){
            console.log('yes all');
            setCat(true);
        }
      
    };

    const filteredServices =
        activeCategory === 'all'
            ? slice 
            : upcoming_projectdata.filter((service) => service.category === activeCategory);


    return (
        <div>
           
            <div className="flex flex-wrap gap-2 md:mx-auto mt-8 justify-center w-full sm:mx-auto lg:mx-16 feedback-container relative xl:mx-20" data-aos = "fade-up" data-aos-duration = "2000">
            <p className="font-poppins font-normal text-[24px] leading-[24px] lg:-ml-28 text-white font-bold tracking-wide mt-6 " >
            Up Coming Projects
                    </p>
                <button
                    className={`flex justify-between flex-col px-10 py-4 ml-4 rounded-[20px]  max-w-[170px]  max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'all' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('all')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2 ">
                        All
                    </p>

                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'magazine' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('magazine')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                    Magazine
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'listing' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('listing')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                    Listing
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'crm' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('crm')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                    CRM/LMS
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'ecommerce' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('ecommerce')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                    E-commerce
                    </p>
                </button>
            </div>
            <div className='mx-w-[1300px] h-auto rounded-[20px] mt-10 xs:mx-10 mx-4' >
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  sm:gap-1" data-aos = "fade-up" data-aos-duration = "2000">
                    {filteredServices.map((service) => (
                        <div data-aos = "zoom-in" data-aos-duration = "2000">
                        <div key={service.id} className="flex justify-between sm:mx-auto xs:mx-auto flex-col px-10 lg:px-0 py-12 w-[320px]  xs:w-[370px] sm:w-[320px] lg:w-[320px] md:w-[370px] lg:mx-auto h-[220px] bg-indigo-500 hover:opacity-50  md:mr-10 sm:mr-5 mx-auto my-5 bg-black-gradient-2 rounded-[20px] box-shadow  border-cyan-200" id='aryss' >
                           <img src={service.image} alt="servicecate" className='xs:w-[372px] w-[320px] sm:w-[320px] md:w-[370px] lg:w-[380px] h-[220px] -mt-12 -mx-10 absolute  rounded-[10px]  ' />
                            <div id='galz' className='md:mx-auto hover:opacity-100'>
                                <p className="font-poppins font-normal text-[22px] leading-[24px] text-white text-center font-bold tracking-wide  mt-5">
                                    {service.title}
                                </p>
                                <p className=" font-normal text-[14px] leading-[22px] text-white text-center w-[260px] sx:w-[430px] sm:w-[280px] lg:w-[320px]  mt-5">
                                    {service.content}
                                </p>

                                
                                    <h2 className='text-white text-[28px] text-center'>Coming soon...</h2>

                            </div>
                          
                        </div>
                        </div>
                    ))}

                    {/* Modal for image preview  */}
                    {selectedService && (
                        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-10">
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M14.348 5.652a.5.5 0 0 1 0 .707L10.707 10l3.641 3.641a.5.5 0 0 1-.707.707L10 10.707l-3.641 3.641a.5.5 0 1 1-.707-.707L9.293 10 5.652 6.359a.5.5 0 0 1 .707-.707L10 9.293l3.641-3.641a.5.5 0 0 1 .707 0z"
                                        />
                                    </svg>
                                </button>
                                <img
                                    src={selectedService.image}
                                    alt="servicecate"
                                    className="max-w-full max-h-full"
                                    style={{ maxHeight: "70vh", maxWidth: "100vh" }}
                                />
                            </div>
                        </div>
                        
                    )}
                    {/* Modal for image preview  end here */}
                </div>
            {
               getCat && 
                
                
                        <div class="mt-10 mb-14" data-aos = "fade-up" data-aos-duration = "2000">
                           <button type="submit" onClick={() => loadMore()} class="block w-[300px] sm:w-[300px] mx-auto rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Load More</button>
                        </div>
                
            } 
             
               
                <br />
            </div>
        </div>

    )
}


export default Team_gallery;
