import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-gray-100 dark:bg-[#111] text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Email */}
            <a
              href="mailto:info@theorbit.one"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-3 py-1 rounded-full text-xs sm:text-sm text-white"
            >
              <FaEnvelope />
              <span className="hidden sm:inline">info@theorbit.one</span>
            </a>

            {/* Phone */}
            <a
              href="tel:00447935390848"
              className="flex items-center gap-2 text-xs sm:text-sm hover:text-purple-500"
            >
              <FaPhoneAlt />
              <span className="hidden md:inline">00447935390848</span>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="flex items-center gap-2 text-xs sm:text-sm hover:text-green-500"
            >
              <FaWhatsapp className="text-green-500" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a className="hover:text-purple-500 text-blue-500" href="#">
                <FaFacebookF />
              </a>
              <a className="hover:text-purple-500 text-red-500" href="#">
                <FaYoutube />
              </a>
              <a className="hover:text-purple-500 text-pink-500" href="#">
                <FaInstagram />
              </a>
              <a className="hover:text-purple-500 text-blue-600" href="#">
                <FaLinkedinIn />
              </a>
            </div>

            {/* Language */}
            <select className="bg-white dark:bg-[#111] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-xs sm:text-sm">
              <option>English</option>
              <option>Bangla</option>
              <option>Hindi</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
