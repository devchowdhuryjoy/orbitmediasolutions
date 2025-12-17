import React from "react";

const MidHeader = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0d0c21] overflow-hidden">
      <div className="relative w-full">
        <div className="whitespace-nowrap py-2">
          <marquee behavior="" direction="">
            <span className="inline-block px-6 text-sm sm:text-base md:text-lg font-semibold text-black dark:text-white">
            We are delighted to announce that we are opening a new branch in
            Liverpool soon!
          </span>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default MidHeader;
