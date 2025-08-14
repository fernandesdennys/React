import React from 'react';

export default (props) => {
  return (
    <div>
      <div>
        <label htmlFor="passoInput">Passo: </label>
        <input
          type="number"
          name=""
          id="passoInput"
          value={props.passo}
          onChange={(e) => props.setPasso(+e.target.value)}
        />
      </div>
    </div>
  );
};
