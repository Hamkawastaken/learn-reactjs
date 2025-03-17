import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductsPage";

import Navbar from "./components/Navbar";

import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </>
  );
}

export default App;
