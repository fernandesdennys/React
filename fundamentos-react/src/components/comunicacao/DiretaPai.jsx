import React from 'react';
import DiretaFilho from './DiretaFilho';

const InfDiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true}>
        {' '}
      </DiretaFilho>
      <DiretaFilho nome="Gabriel" idade={25} nerd={false}>
        {' '}
      </DiretaFilho>
    </div>
  );
};
export default InfDiretaPai;
