import React from "react";
import "./IceCreamTasteSummary.css";
const iceCreamTasteSummary = props => {
  if (props.taste != "") {
    return (
      <div className="ice-cream-taste-summary">
        <p>{props.taste}</p>
        <button
          className="delete-button"
          onClick={() => props.deleteTasteFromIceCream(props.taste)}
        >
          Usuń
        </button>
      </div>
    );
  }
  return null;
};

export default iceCreamTasteSummary;
