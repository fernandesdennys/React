import React from 'react';
import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default (props) => {
  const lista = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco.toFixed(2)}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>PRECO</th>
          </tr>
        </thead>
        <tbody>
          {lista}
        </tbody>
      </table>
    </div>
  );
};
