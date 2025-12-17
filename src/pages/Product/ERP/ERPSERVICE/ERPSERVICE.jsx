import React from 'react'
import RainbowGradientButton from '../../../Button/RainbowGradientButton'
import e1 from '../../../../assets/products/e1.png'

const ERPSERVICE = () => {
  return (
    <div className='bg-white text-[#0b0b0f] py-16 px-4 md:px-10'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-12'>
        
        <div className='flex-1 text-left'>
          <h1 className='text-5xl md:text-7xl font-bold leading-tight mb-6'>
            ERP Software <br /> Services UK
          </h1>
          
          <h3 className='text-xl md:text-2xl font-semibold mb-4 '>
            By Orbit Media Solutions — <span className='font-normal'>Smart, Scalable & Custom ERP Solutions for UK Businesses</span>
          </h3>
          
          <p className='text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl line-clamp-3 text-justify'>
            Orbit Media Solutions provides modern ERP (Enterprise Resource Planning) Software Services to help UK businesses streamline operations, automate processes, reduce cost, and gain real-time control over Finance, HR, Inventory, CRM, Supply Chain, and Manufacturing — all in one platform. We deliver fully customisable, scalable and secure ERP solutions tailored for SMEs and enterprises across the UK.
          </p>

          <div className=" p-0.5  ">
             <RainbowGradientButton/>
          </div>
        </div>

        <div className='flex-1 flex justify-center md:justify-end'>
          <div className='relative group'>
            <img 
              src={e1} 
              alt="ERP Software Services" 
              className='w-full max-w-xl rounded-sm shadow-2xl border border-gray-800'
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ERPSERVICE
