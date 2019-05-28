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
          switchSummary={props.switchSummary}
          addIceCreamToSummary={props.addIceCreamToSummary}
          removeIngredientsFromIceCream={props.removeIngredientsFromIceCream}
        />
      </div>
      <SummaryWindow
        isSummaryVisible={props.isSummaryVisible}
        switchSummary={props.switchSummary}
        orderSummary={props.orderSummary}
        removeIceCreamFromSummary={props.removeIceCreamFromSummary}
        showCancelOrderWindow={props.showCancelOrderWindow}
        isCancelOrderWindowVisible={props.isCancelOrderWindowVisible}
        cancelOrder={props.cancelOrder}
        switchConfirmWindow={props.switchConfirmWindow}
        isConfirmOrderWindowVisible={props.isConfirmOrderWindowVisible}
        confirmOrder={props.confirmOrder}
      />
    </div>
  );
};

export default mainWindow;
