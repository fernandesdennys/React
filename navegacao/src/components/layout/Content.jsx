import React from 'react';
import './Content.css';
import { Routes, Route } from 'react-router-dom'; // Importe esses arquivos

const Content = (porps) => (
  <main className="Content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <h1>Componente Content</h1>
  </main>
);
export default Content;
