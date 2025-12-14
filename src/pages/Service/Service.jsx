import React from 'react'
import ServiceContent from './ServiceConent/ServiceContent'
import ServiceCard from './ServiceCard/ServiceCard'


const Service = () => {
  return (
    <div  className="container mx-auto bg-white dark:bg-[#0d0c21] text-black dark:text-white">
        <ServiceContent/>
        <ServiceCard/>
    </div>
  )
}

export default Service