import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
