import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import Product from "./Components/Product/Product";
import About from "./Components/Home/About";
import AboutMore from "./Components/Home/AboutMore";
// import DataV from "./Components/Visualization/DataV";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/about-us-more" exact element={<AboutMore />} />

        <Route path="/product-list" element={<Product />} />

        {/* <Route path="/dv" element={<DataV />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
