import React from "react";
import "./Taste.css";
const taste = props => {
  return (
    <div className="taste">
      <img
        className="ingredientImage"
        src={require("../../../../assets/" + props.name + ".png")}
        alt={"img" + props.name}
      />
    </div>
  );
};

export default taste;
