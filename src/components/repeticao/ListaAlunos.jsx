import React from 'react';
import './ListaAlunos.css';
import alunos from '../../data/alunos';

export default (props) => {
  const alunosJSX = alunos.map((aluno) => {    
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} {aluno.nota}
      </li>
    );
  });

  /* Eu transformei uma lista de objetos do tipo ALUNO em trexos de JSX
  da mesma forma que a gente consegue pegar um trexo de JSX e armazenar em uma variavel
  eu consigo pegar um treco de JSX apartir de uma função MAP e para cada objeto transformar esses elementos 
  em trexos de JSX e assim colocar ele dentro da UL conforme mostra embaixo, de tal forma que ele vai mostrar 
  todos os elementos que foram convertidos de alunos para list item que é exatamento o LI*/

  return (
    <div>
      <ul>{alunosJSX}</ul>
    </div>
  );
};
