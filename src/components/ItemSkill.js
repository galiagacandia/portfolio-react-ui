import './ItemSkill.scss'
import React from "react";

const ItemSkill = (props) => {
  return(
    <article className="itemskill">
      <img
        src={props.imageUrl} alt={props.imageAlt} width='100px'/>
    </article>
  );
}
export default ItemSkill;
