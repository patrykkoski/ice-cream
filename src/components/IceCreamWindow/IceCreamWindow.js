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
        <div>
          <h3>Smaki:</h3>
          {iceCreamTasteSummary}
        </div>
        <div>
          <h3>Dekoracja:</h3>
          <IceCreamDecorationSummary
            decoration={props.iceCreamDecorationSummary}
          />
        </div>
        <div>
          <h3>Polewa:</h3>
          <IceCreamSauceSummary sauce={props.iceCreamSauceSummary} />
        </div>
      </div>
      <button className="add-to-order" onClick={props.addIceCreamToSummary}>
        Dodaj loda do zamówienia
      </button>
      <button
        className="clear-ice-cream"
        onClick={props.removeIngredientsFromIceCream}
      >
        Usuń obecnego loda
      </button>
      <button className="button-show-order" onClick={props.switchSummary}>
        PODSUMOWANIE ZAMÓWIENIA
      </button>
    </div>
  );
};

export default iceCreamWindow;
