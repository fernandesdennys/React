import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default () => (
  <div className="App">
    <h1>Fundamentos React (Arrow Function)</h1>

    <div className="Cards">
      <Card titulo="#05 Componente com Filhos" color="#D0C91F">
        <Familia sobrenome="Fernandes">
          
        </Familia>
      </Card>

      <Card titulo="#04 Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 Fragmento" color="#E94E69">
        <Fragmento />
      </Card>

      <Card titulo="#02 Com Parâmetro" color="#28ABE3">
        <ComParametro
          titulo="Situação do Aludo"
          aluno="Dennys Fernandes"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
