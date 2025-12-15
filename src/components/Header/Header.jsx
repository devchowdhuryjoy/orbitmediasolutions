import React from "react";
import TopHeader from "./TopHeader/TopHeader";
import MidHeader from "./MidHeader/MidHeader";
import LastHeader from "./LastHeader/LastHeader";

const Header = () => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0d0c21] text-black dark:text-white">
      <TopHeader />
      <MidHeader />
      <LastHeader />
    </div>
  );
};

export default Header;
