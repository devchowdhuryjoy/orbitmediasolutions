import React from 'react'
import AboutStory from './AboutStory/AboutStory'
import AboutMission from './AboutMission/AboutMission'
import AboutTeam from './AboutTeam/AboutTeam'
import AboutBrand from './AboutBrand/AboutBrand'

const About = () => {
  return (
    <div className='container mx-auto '>
    <AboutStory/>
    <AboutMission/>
    <AboutTeam/>
    <AboutBrand/>
    </div>
  )
}

export default About