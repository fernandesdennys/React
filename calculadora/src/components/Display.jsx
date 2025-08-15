import React from 'react';
import './Display.css';

const displayVisor = (props) => (
  <div className="display">{props.value}</div>
); /* componente funcionao de retorno RÁPIDO */

export default displayVisor;

/* const displayVisor = (props) => {
  return <div className="display">{props.value}</div>;
};
export default displayVisor; */
