import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes.jsx";
import { AppProvider } from "./context/AppContext.js";
import { ProductProvider } from "./context/ProductProvider.jsx";
import { ServiceProvider } from "./context/ServiceProvider.jsx";
import { ErpProvider } from "./context/ErpProvider.jsx";
// import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErpProvider>
      <ServiceProvider>
        <ProductProvider>
          <AppProvider>
            <RouterProvider router={router} />
          </AppProvider>
        </ProductProvider>
      </ServiceProvider>
    </ErpProvider>
  </StrictMode>
);
