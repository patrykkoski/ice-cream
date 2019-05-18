import React from "react";
import SummaryWindow from "../SummaryWindow/SummaryWindow";
import IceCreamWindow from "../IceCreamWindow/IceCreamWindow";
import IngredientsWindow from "../IngredientsWindow/IngredientsWindow";
import "./MainWindow.css";
const mainWindow = props => {
  return (
    <div>
      <div className="main-window">
        <IngredientsWindow
          tasteList={props.tasteList}
          decorationList={props.decorationList}
          saucesList={props.saucesList}
          addTasteToIceCream={props.addTasteToIceCream}
          addDecorationToIceCream={props.addDecorationToIceCream}
          addSauceToIceCream={props.addSauceToIceCream}
        />
        <IceCreamWindow
          iceCreamTasteSummary={props.iceCreamTasteSummary}
          iceCreamDecorationSummary={props.iceCreamDecorationSummary}
          iceCreamSauceSummary={props.iceCreamSauceSummary}
          deleteTasteFromIceCream={props.deleteTasteFromIceCream}
          showSummary={props.showSummary}
        />
      </div>
      <SummaryWindow isSummaryVisible={props.isSummaryVisible} />
    </div>
  );
};

export default mainWindow;
