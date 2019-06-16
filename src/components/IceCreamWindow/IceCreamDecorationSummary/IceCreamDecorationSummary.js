import React from "react";
import "./IceCreamDecorationSummary.css";

const iceCreamDecorationSummary = props => {
  let btn;
  let p;
  if (props.decoration) {
    p = <p className="p-left">{props.decoration}</p>;
    btn = (
      <button
        className="delete-button"
        onClick={props.deleteDecorationFromIceCream}
      >
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

export default iceCreamDecorationSummary;
