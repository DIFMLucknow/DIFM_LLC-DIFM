
import React, { useState } from 'react';



const Testimonial_video = ({id,video_link,image,description}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div key = {id} className="flex mx-auto sm:mx-8 border-cyan-200 hover:border-2 bg-discount-gradient flex-col px-6 py-8 rounded-[20px]  md:mr-1 sm:mr-5 mr-0 my-5" data-aos = "fade-up" data-aos-duration = "2000">
      {isVideoPlaying ? (
        <video controls autoPlay>
          <source key={id} src={video_link} type="video/mp4"  />
        </video>
        
      ) : (
        <img
          src={image}
          alt="Thumbnail"
          onClick={handleClick}
        />
      )}
      <p className='text-white text-sm mt-2'>{description}</p>
    </div>
  );
};

export default Testimonial_video;
