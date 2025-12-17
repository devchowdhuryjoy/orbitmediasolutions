import React from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Product from '../pages/Product/Product';
import ERP from '../pages/Product/ERP/ERP';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage/>,
    children:[
      { index: true, Component: Home },
      { path: "/about", Component: About },
      {
        path: "/all-products",
        Component: Product
      },
      // { path: "/product/erp-software", Component: ERP },
      { path: "/product/:sys", Component: ERP },
    ]
  },
]);