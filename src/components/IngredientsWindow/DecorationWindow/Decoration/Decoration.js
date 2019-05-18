import React from "react";
import "./Decoration.css";

const decoration = props => {
  return (
    <div className="decoration">
      <img
        className="ingredientImage"
        src={require("../../../../assets/" + props.name + ".png")}
        alt={"img" + props.name}
      />
      <p>{props.name}</p>
    </div>
  );
};

export default decoration;
