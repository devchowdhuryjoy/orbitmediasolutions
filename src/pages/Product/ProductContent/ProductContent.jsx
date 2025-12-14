import React from 'react'

const ProductContent = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-16">
      <div className="container mx-auto flex flex-col items-center text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          Our Products
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
          Complete Digital Solutions for Your Business
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl  leading-relaxed">
         We develop robust digital products to help businesses grow and succeed in the digital era.
        </p>

      </div>
    </div>
  )
}

export default ProductContent