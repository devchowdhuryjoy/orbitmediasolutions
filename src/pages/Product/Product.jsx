import React from 'react'
import ProductContent from './ProductContent/ProductContent'
import ProductCard from './ProductCard/ProductCard'

const Product = () => {
  return (
    <div className="container mx-auto bg-white dark:bg-[#0d0c21] text-black dark:text-white mb-10">
        <ProductContent/>
        <ProductCard/>
        
    </div>
  )
}

export default Product