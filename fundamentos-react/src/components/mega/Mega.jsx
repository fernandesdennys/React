import './Mega.css';
import React, { useState } from 'react';

export default (props) => {
  function gerarNumeroContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numeroIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numeroIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3 className='letras'>
        {numeros.join(' ')}</h3>
      <div>
        <label htmlFor="">Qtde de Números</label>
        <input
          min="6"
          max="15"
          type="number"
          name=""
          id=""
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
