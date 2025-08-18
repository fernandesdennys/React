import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // essa importação mudou
import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';
import './App.css';

const App = (porps) => (
  <div className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </div>
);

export default App;
