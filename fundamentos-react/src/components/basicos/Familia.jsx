import React, { cloneElement } from "react";
/* import FamiliaMembro from "./FamiliaMembro"; */

export default props => {
  return (
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, {...props, key: i}); /* Método com chave */

        /* props.children.map((child) => {
          return cloneElement(child, props) */
        })
        /* MAP (serve para mapear um determinado array em outro array)*/
      /* React.cloneElement(props.children, props)  */
      }
    </div>
  )

}