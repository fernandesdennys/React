import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
  return (
    <div>
      <FamiliaMembro nome="Dennys" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Johny" {...props} /> {/* Operador Spread */}
      <FamiliaMembro nome="Emilly" sobrenome="Fernandes"/>
    </div>
  )

}