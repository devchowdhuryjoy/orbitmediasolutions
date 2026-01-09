import React from 'react';
import AboutStory from './AboutStory/AboutStory';
import AboutMission from './AboutMission/AboutMission';
import AboutTeam from './AboutTeam/AboutTeam';
import AboutBrand from './AboutBrand/AboutBrand';

const About = () => {
  // Replace this with your actual API endpoint that returns JSON for the story
  const aboutStoryApi = "https://theorbit.one/api/about-story";

  return (
    <div className='container mx-auto'>
      {/* Dynamic AboutStory with API URL */}
      <AboutStory apiUrl={aboutStoryApi} />

      {/* Other sections (can also be made dynamic if needed) */}
      <AboutMission />
      <AboutTeam />
      <AboutBrand />
    </div>
  );
};

export default About;
