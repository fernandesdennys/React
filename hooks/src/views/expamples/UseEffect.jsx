import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

/* #EX01 */
function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = 'Take it easy';
      } else {
        document.title = 'Hook UseEffect';
      }
    },
    [fatorial]
  );

  /* #EX02 */
  const [status, setStatus] = useState('Ímpar')
  useEffect (function () { 
  setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
  },[number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {fatorial === -1 ? 'Não existe' : fatorial}
          </span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className='center'>
        <span className="text">Status:</span>
        <span className="text red" >{status}</span>
      </div>
    </div>
  );
};

export default UseEffect;
