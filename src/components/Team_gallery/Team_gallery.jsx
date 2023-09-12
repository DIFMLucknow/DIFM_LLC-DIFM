import React, { useState } from 'react';
import styles from '../../style';
import { Team_gallerydata } from '../../constants';
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

    const slice = Team_gallerydata.slice(0, limit);
 

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
            : Team_gallerydata.filter((service) => service.category === activeCategory);


    return (
        <div>
            <h1 className="text-white font-poppins font-normal  text-[35px] leading-[28px] text-center mb-8 sm:text-[50px]" data-aos = "zoom-in" data-aos-duration = "2000">Teams Gallery</h1>
            <p className='mt-4 text-white text-center m-auto w-[90%] sm:mx-w-[300px] text-[18px] xl:text-[20px] xl:mx-80 mt-4 md:w-[50%]' data-aos = "zoom-in" data-aos-duration = "2000">
                We know how to celebrate and bond as a team. Take a look at the fun and memorable moments we captured!"
            </p>
            <div className="lg:mx-auto flex flex-wrap  md:mx-48 mt-8 justify-center w-full sm:mx-auto feedback-container relative xl:mx-20" data-aos = "fade-left" data-aos-duration ="2000">
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[170px]  max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'all' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('all')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2 ">
                        All Events
                    </p>

                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Fred in India' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Fred in India')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                        Fred in India
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Andrey in India' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Andrey in India')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-center font-bold tracking-wide -mt-2">
                        Andrey in India
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Bharatpur Toor Nov-2022' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Bharatpur Toor Nov-2022')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                        Bharatpur Tour Nov-2022
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Movie Night 4DX' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Movie Night 4DX')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                        Movie Night 4DX
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Nirma Univ.' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Nirma Univ.')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                        Nirma University send-off
                    </p>
                </button>
                <button
                    className={`flex justify-between flex-col px-10 py-4 rounded-[20px]  max-w-[438px] max-h-[40px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] box-shadow focus:outline-none ${activeCategory === 'Random Office List' ? 'bg-blue-gradient' : 'text-white bg-black-gradient-2'
                        }`}
                    onClick={() => handleCategoryChange('Random Office List')}
                >
                    <p className="font-poppins font-normal text-[16px] leading-[24px]  text-center font-bold tracking-wide -mt-2">
                        Random Office Clicks
                    </p>
                </button>
            </div>
            <div className='bg-black-gradient-2 mx-w-[1300px] h-auto rounded-[20px] mt-10 xs:mx-10 mx-4'>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  sm:gap-1" >
                    {filteredServices.map((service) => (
                        
                        <div key={service.id} className="flex justify-between sm:mx-auto xs:mx-auto flex-col px-10 py-12 w-[320px]  xs:w-[370px] sm:w-[320px] lg:w-[320px] md:w-[370px]lg:mx-auto h-[220px] bg-indigo-500 hover:opacity-50 md:mr-10 sm:mr-5 mx-auto my-5 bg-black-gradient-2 rounded-[20px] box-shadow  border-cyan-200" id='ary' data-aos = "zoom-in" data-aos-duration = "2000">
                            <img src={service.image} alt="servicecate" className='xs:w-[370px] w-[318px] sm:w-[320px] md:w-[370px] lg:w-[330px] h-[220px] -mt-12 -mx-10 absolute  rounded-[20px] ' />
                            <div id='gal'>
                                <p className="font-poppins font-normal text-[22px] leading-[24px] text-white text-center font-bold tracking-wide  mt-5">
                                    {service.title}
                                </p>

                                <div className="flex flex-row">
                                    <div className="flex flex-col ml-4 ">

                                        <button
                                            type="button"
                                            onClick={() => setSelectedService(service)}
                                            className={` ml-20 py-2 px-6 mt-6 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
                                        >
                                            View
                                        </button>

                                    </div>
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
                
                
                        <div class="mt-10 mb-14">
                           <button type="submit" onClick={() => loadMore()} class="block w-[300px] sm:w-[300px] mx-auto rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Load More</button>
                        </div>
                
            } 
             
               
                <br />
            </div>
        </div>

    )
}


export default Team_gallery;
