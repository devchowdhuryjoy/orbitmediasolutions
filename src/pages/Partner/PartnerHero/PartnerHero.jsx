import React from 'react'
import partner from "../../../assets/partner/partner.avif";
import RainbowGradientButton from '../../Button/RainbowGradientButton';

const PartnerHero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-base-100 image-full w-full shadow-sm rounded-md overflow-hidden">
            {/* Background Image */}
            <figure>
              <img
                src={partner}
                alt="Become a Partner"
                className="w-full object-cover h-56 sm:h-72 md:h-80 lg:h-96"
              />
            </figure>
    
            {/* Content */}
            <div className="card-body flex items-center justify-center text-center px-4 sm:px-6">
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  Become a Partner
                </h2>
    
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4">
                  Join our network of partners and unlock powerful growth
                  opportunities with competitive commissions, dedicated support, and
                  premium resources to help your business thrive.
                </p>
    
                <div className="card-actions justify-center">
                  <RainbowGradientButton>Get in Touch</RainbowGradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PartnerHero