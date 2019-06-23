import React from "react";
import IceCreamDecorationSummary from "./IceCreamDecorationSummary/IceCreamDecorationSummary";
import IceCreamTasteSummary from "./IceCreamTasteSummary/IceCreamTasteSummary";
import IceCreamSauceSummary from "./IceCreamSauceSummary/IceCreamSauceSummary";
import "./IceCreamWindow.css";
const iceCreamWindow = props => {
  const iceCreamTasteSummary = props.iceCreamTasteSummary.map((taste, i) => {
    return (
      <IceCreamTasteSummary
        taste={taste}
        deleteTasteFromIceCream={props.deleteTasteFromIceCream}
      />
    );
  });
  return (
    <div className="ice-cream-window">
      <div className="ice-cream-window-wrapper">
        <div className="ice-cream-border sum-50">
          <h3>Smaki:</h3>
          <div className="ice-cream-taste-summary-wrapper">
            {iceCreamTasteSummary}
          </div>
        </div>
        <div className="ice-cream-border sum-25">
          <h3>Dekoracja:</h3>
          <IceCreamDecorationSummary
            decoration={props.iceCreamDecorationSummary}
            deleteDecorationFromIceCream={props.deleteDecorationFromIceCream}
          />
        </div>
        <div className="ice-cream-border sum-25">
          <h3>Polewa:</h3>
          <IceCreamSauceSummary
            sauce={props.iceCreamSauceSummary}
            deleteSauceFromIceCream={props.deleteSauceFromIceCream}
          />
        </div>
      </div>
      <div className="ice-cream-section-buttons">
        <button className="add-to-order" onClick={props.addIceCreamToSummary}>
          DODAJ LODA DO ZAMÓWIENIA
        </button>
        <button
          className="clear-ice-cream"
          onClick={props.removeIngredientsFromIceCream}
        >
          USUŃ OBECNEGO LODA
        </button>
        <button className="button-show-order" onClick={props.switchSummary}>
          PODSUMOWANIE ZAMÓWIENIA
        </button>
      </div>
    </div>
  );
};

export default iceCreamWindow;
