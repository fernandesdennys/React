import React from 'react';
//React.Fragment serve para usar sempre que voce precisar retorar mais de um elemento adjacente sem envolver em uma DIV
export default function Fragmento(props) {
  return (
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse ERRO!</p>
    </React.Fragment>
  );
}
