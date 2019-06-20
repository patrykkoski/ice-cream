import React from "react";
import Taste from "./Taste/Taste";
import "./TasteWindow.css";
const tasteWindow = props => {
  const tastes = props.tasteList.map((taste, i) => {
    if (taste.isAvailable) {
      return (
        <div
          key={i}
          className="taste-window"
          onClick={() => props.addTasteToIceCream(taste.name)}
        >
          <Taste id={taste.id} name={taste.name} />
          <p>{taste.name}</p>
        </div>
      );
    }
    return null;
  });
  return tastes;
};

export default tasteWindow;
