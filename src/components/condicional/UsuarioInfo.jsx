import React from 'react';
import If, { Else } from './If';

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      {/* <If test={usuario && usuario.nome}>
        Seja BEM VINDO! <strong>{usuario.nome}</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja BEM VINDO! <strong>Visitante</strong>
      </If> */}
      <If test={usuario && usuario.nome}>
        Seja BEM VINDO! <strong>{usuario.nome}</strong>
        <Else>
          Seja BEM VINDO! <strong>Visitante</strong>
        </Else>
      </If>
    </div>
  );
};

export default UsuarioInfo;
