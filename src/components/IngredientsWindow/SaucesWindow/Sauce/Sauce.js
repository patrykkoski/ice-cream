import React from "react";
import "./Sauce.css";

const sauce = props => {
  return (
    <div className="sauce">
      <img
        className="ingredientImage"
        src={require("../../../../assets/" + props.name + ".png")}
        alt={"img" + props.name}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default sauce;
