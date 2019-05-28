import React from "react";
import "./ConfirmOrderWindow.css";

const confirmOrderWindow = props => {
  if (props.isConfirmOrderWindowVisible) {
    return (
      <div className="confirm-order-window">
        <div className="confirm-order-window-content">
          <h2>Czy chcesz złożyć zamówienie?</h2>
          <div className="confirm-order-window-buttons">
            <button
              className="no-cancel-order-button"
              onClick={props.confirmOrder}
            >
              TAK
            </button>
            <button
              className="confirm-order-buttton"
              onClick={props.switchConfirmWindow}
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

export default confirmOrderWindow;
