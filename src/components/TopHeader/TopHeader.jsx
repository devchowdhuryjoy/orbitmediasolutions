import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";

export default function TopHeader() {
  return (
   <div className="w-full bg-gray-100 dark:bg-[#111] text-black dark:text-white py-2">
  <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
    
    {/* Left Section */}
    <div className="flex flex-wrap items-center gap-2 md:gap-4">
      <a href="mailto:info@theorbit.one" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-3 py-1 rounded-full text-sm text-white">
        <FaEnvelope className="text-white text-sm" /> info@theorbit.one
      </a>
      <a href="tel:00447935390848" className="flex items-center gap-2 text-black hover:text-purple-400 transition text-sm">
        <FaPhoneAlt className="text-black text-sm" /> 00447935390848
      </a>
      <a href="#" className="flex items-center gap-2 text-black hover:text-green-400 transition text-sm">
        <FaWhatsapp className="text-green-400 text-sm" /> WhatsApp 
      </a>
    </div>

    {/* Right Section */}
    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm">
      <div className="flex items-center gap-3">
        <a href="#" className="text-blue-400 hover:text-purple-400"><FaFacebookF /></a>
        <a href="#" className="text-red-500 hover:text-purple-400"><FaYoutube /></a>
        <a href="#" className="text-pink-500 hover:text-purple-400"><FaInstagram /></a>
        <a href="#" className="text-blue-600 hover:text-purple-400"><FaLinkedinIn /></a>
      </div>
      <select className="bg-white text-black border border-gray-300 rounded-md px-2 py-1 cursor-pointer">
        <option>English</option>
        <option>Bangla</option>
        <option>Hindi</option>
        <option>French</option>
        <option>Spanish</option>
      </select>
    </div>

  </div>
</div>

  );
}
