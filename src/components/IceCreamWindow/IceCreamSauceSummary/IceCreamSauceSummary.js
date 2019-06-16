import React from "react";
import "./IceCreamSauceSummary.css";
const iceCreamSauceSummary = props => {
  let btn;
  let p;
  if (props.sauce) {
    p = <p className="p-left">{props.sauce}</p>;
    btn = (
      <button className="delete-button" onClick={props.deleteSauceFromIceCream}>
        Usuń
      </button>
    );
  } else {
    p = null;
    btn = null;
  }
  return (
    <div className="ice-cream-taste-summary">
      {p}
      {btn}
    </div>
  );
};

export default iceCreamSauceSummary;
