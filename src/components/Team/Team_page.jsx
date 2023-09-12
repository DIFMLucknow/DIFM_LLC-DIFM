import React, { useState } from 'react';
import { teams } from '../../constants';
import Team_gallery from '../Team_gallery/Team_gallery';
import Our_Team from './Our_Team';

const Team_page = () => {
  const [limit, setLimit] = useState(6);


  const loadMore = () => {
    if (limit < 7) {
      setLimit(limit + 1);
    }
  };

  const visibleTeamMembers = teams.slice(0, limit);
  const showLoadMoreButton = limit < 7;

  return (
    <div>
      <h1 className="text-white font-poppins font-normal text-[40px] leading-[28px] text-center mt-8 mb-8 sm:text-[50px]" data-aos="zoom-in" data-aos-duration="3000">
        Our Team
      </h1>
      {/* Rest of the JSX for team member cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto sm:px-4 lg:grid-cols-3 gap-4 flex flex-wrap sm:justify-start justify-center w-full feedback-container -mx-6 sm:mx-0">
        {visibleTeamMembers.map((card) => (
          <Our_Team key={card.id} {...card} />
        ))}
      </div>
      <div class="mt-10 mb-32" data-aos="fade-up" data-aos-duration="3000">
        {showLoadMoreButton && (
          <button
            type="button"
            onClick={() => loadMore()}
            class="block w-[300px] sm:w-[300px] mx-auto rounded-md bg-blue-gradient px-3.5 py-2.5 text-center text-md font-semibold text-dimwhite shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            Load More
          </button>
        )}
      </div>
      <Team_gallery />
    </div>
  );
};

export default Team_page;
