import { SlHome } from "react-icons/sl";
import { RiArrowRightLine } from "react-icons/ri";
import pimg1 from '../../../assets/images/p1.webp'
import pimg2 from '../../../assets/images/p2.webp'
import pimg3 from '../../../assets/images/p3.webp'
import pimg4 from '../../../assets/images/p4.webp'
import pimg5 from '../../../assets/images/p5.webp'
import pimg6 from '../../../assets/images/p6.webp'
import pimg7 from '../../../assets/images/p7.webp'
import pimg8 from '../../../assets/images/p8.webp'
import pimg9 from '../../../assets/images/p9.webp'
import pimg10 from '../../../assets/images/p11.webp'
import pimg11 from '../../../assets/images/p11.webp'
import pimg12 from '../../../assets/images/p12.webp'
import pimg13 from '../../../assets/images/p13.webp'

const ProductCard = () => {
    const productsData = [
        {
            id: 1,
            img: pimg1,
            icon: "SlHome",
            title: "ERP Software Services UK",
            desc: "Orbit Media Solutions provides modern ERP (Enterprise Resource Planning) Software Services to help UK businesses streamline operations, automate processes, reduce cost, and gain real-time.",
            btnText: "Details"
          },
        {
            id: 2,
            img: pimg2,
            icon: "SlHome",
            title: "HR Management Software in the UK",
            desc: "Orbit Media Solutions brings you a complete, cloud-based Human Resources Management (HRM) Software designed specifically for UK companies, including SMEs, startups, and growing organisations..",
            btnText: "Details"
          },
        {
            id: 3,
            img: pimg3,
            icon: "SlHome",
            title: "Smart Cloud Inventory Control",
            desc: "Managing stock shouldn’t be complicated. If you’re dealing with overstocking, stockouts, messy spreadsheets, or multiple locations, it’s time for a smarter solution. Orbit’s cloud-based inventory.",
            btnText: "Details"
          },
        {
            id: 4,
            img: pimg4,
            icon: "SlHome",
            title: "Power Your UK Business with Smarter POS Software",
            desc: "In today’s fast-moving UK retail and hospitality market, a simple cash register is no longer enough. Modern Point of Sale (POS) software has evolved into a strategic business tool that helps you manage",
            btnText: "Details"
          },
        {
            id: 5,
            img: pimg5,
            icon: "SlHome",
            title: "Power Your UK Business with Smarter POS Software",
            desc: "Looking for the ultimate hotel management software UK? Orbit Media Solutions helps hoteliers streamline operations, increase revenue, and create exceptional guest experiences. Trusted by..",
            btnText: "Details"
          },
        {
            id: 6,
            img: pimg6,
            icon: "SlHome",
            title: "Accounting Software for Growing Businesses",
            desc: "Take control of your business finances with easy-to-use, cloud-based accounting software designed for UK small businesses, medium enterprises, and self-employed professionals. Automate..",
            btnText: "Details"
          },
        {
            id: 7,
            img: pimg7,
            icon: "SlHome",
            title: "Payroll Software for UK Businesses",
            desc: "At Orbit Media Solutions, we provide modern, cloud-based payroll software designed specifically for UK employers. Our HMRC-recognised system helps HR and payroll teams run payroll..",
            btnText: "Details"
          },
        {
            id: 8,
            img: pimg8,
            icon: "SlHome",
            title: "Education Management Software",
            desc: "At Orbit Media Solutions, we provide industry-leading education management software designed to streamline school operations, enhance learning, and empower educators. Our solutions are..",
            btnText: "Details"
          },
        {
            id: 9,
            img: pimg9,
            icon: "SlHome",
            title: "Law Firm Management Software UK",
            desc: "At Orbit Media Solutions, we specialise in providing industry-leading law firm management software built specifically for UK solicitors, legal teams and growing practices. Our powerful, cloud-..",
            btnText: "Details"
          },
        {
            id: 10,
            img: pimg10,
            icon: "SlHome",
            title: "Restaurant / Takeaway Management Software UK",
            desc: "Manage your restaurant with ease using our complete restaurant management software designed for the UK hospitality industry. Orbit Media Solutions provides one powerful platform that reduce..",
            btnText: "Details"
          },
        {
            id: 11,
            img: pimg11,
            icon: "SlHome",
            title: "Pharmacy Management Software",
            desc: "At Orbit Media Solutions, we provide advanced Pharmacy Management Software (PMS) in the UK designed to streamline day-to-day pharmacy operations. From automated prescriptions to..",
            btnText: "Details"
          },
        {
            id: 12,
            img: pimg12,
            icon: "SlHome",
            title: "Warehouse Management Software UK",
            desc: "At Orbit Media Solutions, we provide advanced Warehouse Management Software (WMS) for UK ecommerce, 3PL, logistics and wholesale companies. Our powerful cloud-based WMS helps you..",
            btnText: "Details"
          },
        {
            id: 13,
            img: pimg13,
            icon: "SlHome",
            title: "Web Hosting",
            desc: "Looking for reliable UK web hosting that delivers speed, security and 24/7 support? Orbit Media Solutions provides premium hosting solutions designed for businesses, startups and e-commerce..",
            btnText: "Details"
          },
    ]
  return (
    <div>
         <div className="grid md:grid-cols-3 gap-6 justify-items-center">
              {productsData.map((product) => (
                <div key={product.id} className="card bg-base-content w-96 shadow-sm">
                  <figure>
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </figure>
        
                  <div className="card-body flex flex-col items-center ">
                    <div className="card-actions justify-center mb-2">
                      <SlHome className='text-white text-2xl'/>
                    </div>
        
                    <h1 className='text-center text-white text-lg md:text-xl font-semibold mb-2'>
                      {product.title}
                    </h1>
        
                    <p className="text-white text-sm md:text-base text-center whitespace-normal hyphens-auto  leading-relaxed m-0 [text-justify:inter-word]">
                      {product.desc}
                    </p>
        
                    <div className="card-actions justify-center mt-4">
                      <button className="btn btn-active btn-info text-white flex items-center gap-2">
                        {product.btnText} <RiArrowRightLine />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
             
            </div>
            <div className='flex items-center justify-center'>
                <button className="cursor-pointer bg-transparent  border-2 border-violet-500 font-semibold py-3 px-8 rounded-tr-2xl shadow-md transition-all duration-300 transform hover:scale-105">View All Products</button>
            </div>
    </div>
  )
}

export default ProductCard