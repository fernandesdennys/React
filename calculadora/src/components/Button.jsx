import React from 'react';
import './Button.css';

const btnCalc = (props) => {
  let classes = 'btn ';
  classes += props.operation ? 'operation' : '';
  classes += props.double ? 'double' : '';
  classes += props.triple ? 'triple' : '';

  return (
    <button 
    onClick={e => props.click(props.label)}
    className={classes}>
      {props.label}
      </button>
  )
};

export default btnCalc;

/*   
(((<<<-SEGUNDA OPÇÃO ->>>)))
return (
    <button
      className={`
      btn
      ${props.oparation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
      `}
    >
      {props.label}
    </button>
  ); */
