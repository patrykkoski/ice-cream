import React from "react";
import TasteWindow from "./TasteWindow/TasteWindow";
import DecorationWindow from "./DecorationWindow/DecorationWindow";
import SaucesWindow from "./SaucesWindow/SaucesWindow";
import "./IngredientsWindow.css";

const ingredientsWindow = props => {
  return (
    <div className="ingredients-window-wrapper">
      <header>Dodaj składniki</header>
      <div className="ingredients-window">
        <div className="all-tastes">
          <h3>Dodaj smak</h3>
          <div className="ingredients-window-flex ">
            <TasteWindow
              tasteList={props.tasteList}
              addTasteToIceCream={props.addTasteToIceCream}
            />
          </div>
        </div>
        <div className="all-decorations">
          <h3>Dodaj dekorację</h3>
          <div className="ingredients-window-flex ">
            <DecorationWindow
              decorationList={props.decorationList}
              addDecorationToIceCream={props.addDecorationToIceCream}
            />
          </div>
        </div>
        <div className="all-sauces">
          <h3>Dodaj polewę</h3>
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
