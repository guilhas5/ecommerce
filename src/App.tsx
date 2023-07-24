import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componentsproject/Footer";
import Sidebar from "./componentsproject/Sidebar";
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
