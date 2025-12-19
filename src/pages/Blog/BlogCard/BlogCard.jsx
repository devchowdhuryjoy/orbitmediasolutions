import React from "react";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title justify-center">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
