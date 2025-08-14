import './App.css';
import React from 'react';

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Card from './components/layout/Card';
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

const Appbody = () => (
  <div className="App">
    <h1>Fundamentos React (Arrow Function)</h1>

    <div className="Cards">

      <Card titulo="#13 Mega" color="#006400">
        <Mega qtde={6}></Mega>
      </Card>

      <Card titulo="#12 Contador" color="#696969">
        <Contador numeroInicial={0}></Contador>
      </Card>

      <Card titulo="#11 Componente Controlado" color="#593697">
        <Input></Input>
      </Card>

      <Card titulo="#10 Comunicação Indireta" color="#244242">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 Comunicação Direta" color="#4f2b38">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 Renderização Condicional" color="#a39b7e">
        <ParOuImpar numero="20"></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Dennys' }}></UsuarioInfo>
        <UsuarioInfo
          usuario={{ email: 'dennys.projetos@outlook.com' }}
        ></UsuarioInfo>
        {/* <UsuarioInfo usuario={{}} />
        <UsuarioInfo /> */}
      </Card>

      <Card titulo="#07 Tabela de Produtos" color="#269199">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 Repetilção" color="#D4191F">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 Componente com Filhos" color="#D0C91F">
        <Familia sobrenome="Fernandes">
          <FamiliaMembro nome="Dennys" />
          <FamiliaMembro nome="Johny" />
          <FamiliaMembro nome="Emilly" />
          <FamiliaMembro nome="Sandro" />
          <FamiliaMembro nome="Neusa" />
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

export default Appbody;
