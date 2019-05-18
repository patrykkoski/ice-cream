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
      <h3>Podsumowanie loda</h3>
      <h3>Smaki:</h3>
      {iceCreamTasteSummary}
      <h3>Dekoracja:</h3>
      <IceCreamDecorationSummary decoration={props.iceCreamDecorationSummary} />
      <h3>Polewa:</h3>
      <IceCreamSauceSummary sauce={props.iceCreamSauceSummary} />
      <button className="add-to-order" onClick={props.showSummary}>
        Dodaj loda do zamówienia
      </button>
      <button className="button-show-order">PODSUMOWANIE ZAMÓWIENIA</button>
    </div>
  );
};

export default iceCreamWindow;
