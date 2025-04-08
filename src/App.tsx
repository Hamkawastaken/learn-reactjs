import Homepage from "./pages/HomePage";
import Productspage from "./pages/ProductsPage";
import Aboutpage from "./pages/AboutPage";
import Contactpage from "./pages/ContactPage";

import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          paddingTop: "20px",
        }}
      >
        <>
          <Navbar />
        </>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "20px",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: "16px",
          width: "900px",
          backgroundColor: "#3F7D58",
          color: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
