import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import DefaultErrorPage from "./pages/DefaultErrorPage";

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<DefaultErrorPage />} />           	
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
