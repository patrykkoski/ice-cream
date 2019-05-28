import React from "react";
import CancelOrderWindow from "./CancelOrderModal/CancelOrderWindow";
import ConfirmOrderWindow from "./ConfirmOrderWindow/ConfirmOrderWindow";
import "./SummaryWindow.css";

const summaryWindow = props => {
  if (props.isSummaryVisible) {
    const orderSummary = props.orderSummary.map((orderItem, i) => {
      return (
        <div className="orders-ice-cream">
          <h4>LÓD {i + 1}</h4>
          <h4>Smaki</h4>
          <p>{orderItem.tastes[0]}</p>
          <p>{orderItem.tastes[1]}</p>
          <h4>Dekoracja</h4>
          <p>{orderItem.decoration}</p>
          <h4>Polewa</h4>
          <p>{orderItem.sauce}</p>
          <button
            className="button-cancel"
            onClick={() => props.removeIceCreamFromSummary(i)}
          >
            USUŃ LODA
          </button>
        </div>
      );
    });
    return (
      <div className="summary-window">
        <div className="summary-window-content">
          <h3>PODSUMOWANIE ZAMÓWIENIA</h3>
          <div className="orders-ice-cream-wrapper">{orderSummary}</div>
          <div className="summary-button-section">
            <button className="button-back" onClick={props.switchSummary}>
              POWRÓT
            </button>
            <button
              className="button-cancel"
              onClick={props.showCancelOrderWindow}
            >
              ANULUJ ZAMÓWIENIA
            </button>
            <button
              className="button-order"
              onClick={props.switchConfirmWindow}
            >
              ZŁÓŻ ZAMÓWIENIE
            </button>
          </div>
        </div>
        <CancelOrderWindow
          showCancelOrderWindow={props.showCancelOrderWindow}
          isCancelOrderWindowVisible={props.isCancelOrderWindowVisible}
          cancelOrder={props.cancelOrder}
        />
        <ConfirmOrderWindow
          isConfirmOrderWindowVisible={props.isConfirmOrderWindowVisible}
          switchConfirmWindow={props.switchConfirmWindow}
          confirmOrder={props.confirmOrder}
        />
      </div>
    );
  }
  return null;
};

export default summaryWindow;
