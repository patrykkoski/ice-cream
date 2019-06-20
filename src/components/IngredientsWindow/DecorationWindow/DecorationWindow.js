import React from "react";
import Decoration from "./Decoration/Decoration";
import "./DecorationWindow.css";

const decorationWindow = props => {
  const decorations = props.decorationList.map((decoration, i) => {
    if (decoration.isAvailable) {
      return (
        <div
          key={i}
          className="decoration-window"
          onClick={() => props.addDecorationToIceCream(decoration.name)}
        >
          <Decoration id={decoration.id} name={decoration.name} />
          <p>{decoration.name}</p>
        </div>
      );
    }
    return null;
  });
  return decorations;
};
export default decorationWindow;
