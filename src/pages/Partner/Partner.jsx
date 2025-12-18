import React from "react";
import partner from "../../../src/assets/partner/partner.jpg"

const Partner = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="card bg-base-100 image-full w-100% shadow-sm">
        <figure>
          <img
            src={partner}
            alt="Shoes"
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Partner;
