import React from "react";

const Pagination = () => {
  return (
    <div className="container mx- auto">
      <div className="flex justify-center mt-10">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
