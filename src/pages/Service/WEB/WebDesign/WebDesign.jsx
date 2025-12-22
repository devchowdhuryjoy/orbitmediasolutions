import React from "react";
import WebHero from "./WebHero/WebHero";
import DesignSolution from "./DesignSolution/DesignSolution";
import WebFeaturedCard from "./WebFeaturedCard/WebFeaturedCard";
import WebDevelopmentServices from "./WebDevelopmentServices/WebDevelopmentServices";
import WebSolutions from "./WebSolutions/WebSolutions";
import WebDarkHero from "./WebDarkHero/WebDarkHero";
import WebDevelopmentFeatures from "./WebDevelopmentFeatures/WebDevelopmentFeatures";

const WebDesign = () => {
  return (
    <div className="">
      <WebHero/>
      <DesignSolution/>
      <WebFeaturedCard/>
      <WebDevelopmentServices/>
      <WebSolutions/>
      <WebDarkHero/>
      <WebDevelopmentFeatures/>
    </div>
  );
};

export default WebDesign;
