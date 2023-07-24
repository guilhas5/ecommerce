import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
