import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";
import {SidebarProvider} from "./contexts/SidebarContext";
import {CartProvider} from "./contexts/CartContext"
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Router>
    <SidebarProvider>
      <Toaster position="top-center" />
      <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
      </CartProvider>
    </SidebarProvider>
    </Router>
);
