import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Pesticides from "./pages/Pesticides";
import Seeds from "./pages/Seeds";
import Fertilizers from "./pages/Fertilizers";
import PGR from "./pages/PGR";
import ProductDetails from "./pages/components/ProductDetails";
import AgricultureDate from "./pages/AgricultureDate";
// 
const App = () => {
  
  return (
    
  <>
    <a className="whatsapp-btn" target="_blank" href="https://wa.me/+201068063055?text= السلام عليكم كنت عاوز أستفسر عن منتجات حضراتكم " rel="noreferrer">
    <i className="fa-brands fa-whatsapp"></i>
    </a>
      {/* Start Navbar */}
      {/* End Navbar */}

    <div className="container-page" >
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/fertilizers" element={<Fertilizers />} />
          <Route path="/fertilizers/:id" element={<ProductDetails />} />
          <Route path="/pesticides" element={<Pesticides />} />
          <Route path="/pesticides/:id" element={<ProductDetails />} />
          <Route path="/seeds" element={<Seeds />} />
          <Route path="/seeds/:id" element={<ProductDetails />} />
          <Route path="/pgr" element={<PGR />} />
          <Route path="/pgr/:id" element={<ProductDetails />} />
          <Route path="/agridate" element={<AgricultureDate />} />
        </Routes>
<Footer/>
    </div>
</>

  );
};

export default App;
