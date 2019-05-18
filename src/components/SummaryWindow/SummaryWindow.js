import React from "react";
import "./SummaryWindow.css";

const summaryWindow = props => {
  if (props.isSummaryVisible) {
    return (
      <div className="summary-window">
        <div className="summary-window-content">
          <h3>PODSUMOWANIE ZAMÓWIENIA</h3>

          <div className="summary-button-section">
            <button className="button-back">POWRÓT</button>
            <button className="button-cancel">ANULUJ ZAMÓWIENIA</button>
            <button className="button-order">ZŁÓŻ ZAMÓWIENIE</button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default summaryWindow;
