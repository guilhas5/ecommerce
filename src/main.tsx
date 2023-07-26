import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import {SidebarProvider} from "./contexts/SidebarContext";
import {CartProvider} from "./contexts/CartContext"
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <SidebarProvider>
      <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
      </CartProvider>
    </SidebarProvider>
);
