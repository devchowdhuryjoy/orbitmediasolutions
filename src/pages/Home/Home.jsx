import React from "react";
import Hero from "../Hero/Hero";
import Service from "../Service/Service";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Hero />
      <Service />
      <Product />
    </div>
  );
};

export default Home;
