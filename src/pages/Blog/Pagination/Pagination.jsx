import React from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center mt-10 gap-4">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
        className="text-2xl text-gray-400 disabled:text-gray-300"
      >
        <IoIosArrowDropleftCircle />
      </button>

      <span className="px-4 py-2 border rounded">{page} / {totalPages}</span>

      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
        className="text-2xl text-gray-400 disabled:text-gray-300"
      >
        <IoIosArrowDroprightCircle />
      </button>
    </div>
  );
};

export default Pagination;
