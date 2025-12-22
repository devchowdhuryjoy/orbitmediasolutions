import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import ERP from "../pages/Product/ERP/ERP";
import Service from "../pages/Service/Service";
import WebDesign from "../pages/Service/WEB/WebDesign/WebDesign";
import Partner from "../pages/Partner/Partner";
import Blog from "../pages/Blog/Blog";
import CareerPage from "../pages/career/CareerPage/CareerPage";
import ContactPage from "../pages/contact/ContactPage/ContactPage";
import BlogDetails from "../pages/Blog/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      {
        path: "/all-products",
        Component: Product,
      },
      // { path: "/product/erp-software", Component: ERP },
      { path: "/product/:sys", Component: ERP },
      { path: "/all-service", Component: Service },
      { path: "/service/:sys", Component: WebDesign },
      { path: "/partners", Component: Partner },
      { path: "/blog", children: [
          { index: true, Component: Blog },           // /blog
          { path: ":slug", Component: BlogDetails },  // /blog/:slug
        ], },
      { path: "/career", Component: CareerPage },
      { path: "/contact", Component: ContactPage },
    ],
  },
]);
