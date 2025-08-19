import './Content.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importe esses arquivos

import Home from '../../views/expamples/Home';
import About from '../../views/expamples/About';
import Param from '../../views/expamples/Param';
import NotFound from '../../views/expamples/NoFound';

const Content = (props) => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Param />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);

export default Content;
