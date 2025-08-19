import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Menu = (porps) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/param/Dennys">Param #01</Link>
        </li>

        <li>
          <Link to="/param/Fernandes">Param #02</Link>
        </li>

        <li>
          <Link to="/about">Sobre</Link>
        </li>

        <li>
          <Link to="/naoexiste">Não Existe</Link>
        </li>
      </ul>
    </nav>
  </aside>
);
export default Menu;
