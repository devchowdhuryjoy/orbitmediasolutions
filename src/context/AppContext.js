import React, { createContext, useState, useEffect } from "react";
import { productsData, blogsData, productPageContent } from "../data/mockData";
// import { servicesData } from "../data/webData";
import {
  designSolutionContent,
  servicePageContent,
  servicesData,
  webDarkHeroContent,
  webDevelopmentServices,
  webFeaturedContent,
  webFeaturesContent,
  webHeroData,
  webSolutionsContent,
} from "../data/webData";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setServices(servicesData);
      setBlogs(blogsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
  // const getServiceBySlug = (slug) =>
  //   services.find((p) => p.slug === slug);

  const getBlogBySlug = (slug) => blogs.find((b) => b.slug === slug);

  // ❌ JSX নয়
  // ✅ Pure JS
  return React.createElement(
    AppContext.Provider,
    {
      value: {
        products,
        services,
        webHeroData,
        blogs,
        productPageContent,
        servicePageContent,
        designSolutionContent,
        webDevelopmentServices,
        webFeaturedContent,
        webSolutionsContent,
        webDarkHeroContent,
        webFeaturesContent,
        getProductBySlug,
        // getServiceBySlug,
        getBlogBySlug,
        loading,
      },
    },
    children
  );
};
