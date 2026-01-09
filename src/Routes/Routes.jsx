import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
// import ProductDetails from "../pages/Product/ProductDetails";
import Service from "../pages/Service/Service";
// import WebDesign from "../pages/Service/WEB/WebDesign/WebDesign";
import Partner from "../pages/Partner/Partner";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";
import CareerPage from "../pages/career/CareerPage/CareerPage";
import ContactPage from "../pages/contact/ContactPage/ContactPage";
import ProductDetails from "../pages/Product/ProductDetails/ProductDetails";
import ServiceDetailDesign from "../pages/Service/ServiceDetails/ServiceDetailDesign/ServiceDetailDesign";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "/all-products", Component: Product },
      { path: "/product/:sys", Component: ProductDetails }, // dynamic product
      { path: "/all-service", Component: Service },
      { path: "/service/:sys", Component: ServiceDetailDesign }, // dynamic services
      { path: "/partners", Component: Partner },
      {
        path: "/blog",
        children: [
          { index: true, Component: Blog },        // /blog
          { path: ":slug", Component: BlogDetails }, // /blog/:slug
        ],
      },
      { path: "/career", Component: CareerPage },
      { path: "/contact", Component: ContactPage },
    ],
  },
]);
