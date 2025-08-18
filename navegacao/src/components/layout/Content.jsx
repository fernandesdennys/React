import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/expamples/Home";
import About from "../../views/expamples/About";

 
const Content = props => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  </main>
);
 
export default Content;