import React from "react";
import Sauce from "./Sauce/Sauce";
import "./SaucesWindow.css";

const saucesWindow = props => {
  const sauces = props.saucesList.map((sauce, i) => {
    if (sauce.isAvailable) {
      return (
        <div
          key={i}
          className="sauces-window"
          onClick={() => props.addSauceToIceCream(sauce.name)}
        >
          <Sauce id={sauce.id} name={sauce.name} />
          <p>{sauce.name}</p>
        </div>
      );
    }
    return null;
  });
  return sauces;
};
export default saucesWindow;
