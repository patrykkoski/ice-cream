import React from "react";
import TasteWindow from "./TasteWindow/TasteWindow";
import DecorationWindow from "./DecorationWindow/DecorationWindow";
import SaucesWindow from "./SaucesWindow/SaucesWindow";
import "./IngredientsWindow.css";

const ingredientsWindow = props => {
  return (
    <div className="ingredients-window-wrapper">
      <div className="ingredients-window">
        <div className="all-tastes">
          <div className="ingredients-window-flex ">
            <TasteWindow
              tasteList={props.tasteList}
              addTasteToIceCream={props.addTasteToIceCream}
            />
          </div>
        </div>
        <div className="all-decorations">
          <div className="ingredients-window-flex ">
            <DecorationWindow
              decorationList={props.decorationList}
              addDecorationToIceCream={props.addDecorationToIceCream}
            />
          </div>
        </div>
        <div className="all-sauces">
          <div className="ingredients-window-flex ">
            <SaucesWindow
              saucesList={props.saucesList}
              addSauceToIceCream={props.addSauceToIceCream}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ingredientsWindow;
