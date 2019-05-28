import React from "react";
import "./CancelOrderWindow.css";

const cancelOrderWindow = props => {
  if (props.isCancelOrderWindowVisible) {
    return (
      <div className="cancel-order-window">
        <div className="cancel-order-window-content">
          <h2>Czy chcesz anulować zamówienie?</h2>
          <div className="cancel-order-window-buttons">
            <button
              className="cancel-order-buttton"
              onClick={props.cancelOrder}
            >
              TAK
            </button>
            <button
              className="no-cancel-order-button"
              onClick={props.showCancelOrderWindow}
            >
              NIE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default cancelOrderWindow;
