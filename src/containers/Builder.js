import React, { Component } from "react";
import MainWindow from "../components/MainWindow/MainWindow";
import axios from "../axios-orders";

class Builder extends Component {
  state = {
    tastesData: [],
    decorationData: [],
    saucesData: [],
    iceCream: { tastes: ["", ""], decoration: "", sauce: "" },
    isSummaryVisible: false,
    orderSummary: [],
    isCancelOrderWindowVisible: false,
    isConfirmOrderWindowVisible: false
  };
  componentDidMount() {
    axios
      .get("https://ice-cream-app-d8782.firebaseio.com/tastes.json")
      .then(response => {
        this.setState({ tastesData: response.data });
      })
      .catch(error => {
        alert(error);
      });
    axios
      .get("https://ice-cream-app-d8782.firebaseio.com/decoration.json")
      .then(response => {
        this.setState({ decorationData: response.data });
      })
      .catch(error => {
        alert(error);
      });
    axios
      .get("https://ice-cream-app-d8782.firebaseio.com/sauces.json")
      .then(response => {
        this.setState({ saucesData: response.data });
      })
      .catch(error => {
        alert(error);
      });
  }

  addTasteToIceCream = name => {
    let stateTastePlaceholder = this.state.iceCream.tastes;
    let stateDecorationPlaceholder = this.state.iceCream.decoration;
    let stateSaucesPlaceholder = this.state.iceCream.sauce;

    if (stateTastePlaceholder.includes(name)) {
      return 0;
    } else if (stateTastePlaceholder[0] === "") {
      stateTastePlaceholder[0] = name;
      this.setState({
        iceCream: {
          tastes: stateTastePlaceholder,
          decoration: stateDecorationPlaceholder,
          sauce: stateSaucesPlaceholder
        }
      });
      return null;
    } else if (stateTastePlaceholder[1] === "") {
      stateTastePlaceholder[1] = name;
      this.setState({
        iceCream: {
          tastes: stateTastePlaceholder,
          decoration: stateDecorationPlaceholder,
          sauce: stateSaucesPlaceholder
        }
      });
    }
  };

  addDecorationToIceCream = name => {
    let statePlaceholder = this.state.iceCream;
    statePlaceholder.decoration = name;
    this.setState({ iceCream: statePlaceholder });
  };

  addSauceToIceCream = name => {
    let statePlaceholder = this.state.iceCream;
    statePlaceholder.sauce = name;
    this.setState({ iceCream: statePlaceholder });
  };

  deleteTasteFromIceCream = name => {
    let statePlaceholder = this.state.iceCream;
    let tastesStatePlaceholder = statePlaceholder.tastes;
    if (tastesStatePlaceholder[0] === name) {
      tastesStatePlaceholder[0] = tastesStatePlaceholder[1];
      tastesStatePlaceholder[1] = "";
    } else {
      tastesStatePlaceholder[1] = "";
    }
    statePlaceholder.tastes = tastesStatePlaceholder;
    this.setState({ iceCream: statePlaceholder });
  };

  removeIngredientsFromIceCream = () => {
    let statePlaceholder = this.state.iceCream;
    statePlaceholder.tastes = ["", ""];
    statePlaceholder.decoration = "";
    statePlaceholder.sauce = "";
    this.setState({
      iceCream: {
        tastes: statePlaceholder.tastes,
        decoration: statePlaceholder.decoration,
        sauce: statePlaceholder.sauce
      }
    });
  };

  addIceCreamToSummary = () => {
    if (this.state.iceCream.tastes[0] != "") {
      let statePlaceholder = this.state.orderSummary;
      statePlaceholder.push(this.state.iceCream);
      this.setState({
        iceCream: { tastes: ["", ""], decoration: "", sauce: "" },
        orderSummary: statePlaceholder
      });
    } else {
      alert("Dodaj smaki");
    }
  };

  removeIceCreamFromSummary = number => {
    let summaryStatePlaceholder = this.state.orderSummary;
    summaryStatePlaceholder.splice(number, 1);
    this.setState({ orderSummary: summaryStatePlaceholder });
  };

  switchSummary = () => {
    let summaryPlaceholder = this.state.isSummaryVisible;
    this.setState({ isSummaryVisible: !summaryPlaceholder });
  };

  showCancelOrderWindow = () => {
    let statePlaceholder = this.state.isCancelOrderWindowVisible;
    this.setState({ isCancelOrderWindowVisible: !statePlaceholder });
  };

  cancelOrder = () => {
    let statePlaceholder = this.state.isCancelOrderWindowVisible;
    this.setState({
      orderSummary: [],
      isSummaryVisible: false,
      isCancelOrderWindowVisible: !statePlaceholder,
      iceCream: {
        tastes: ["", ""],
        decoration: "",
        sauce: ""
      }
    });
  };

  switchConfirmWindow = () => {
    let statePlaceholder = this.state.isConfirmOrderWindowVisible;
    if (this.state.orderSummary.length > 0) {
      this.setState({ isConfirmOrderWindowVisible: !statePlaceholder });
    } else {
      alert("Nie można zatwierdzić pustego zamówienia");
    }
  };

  confirmOrder = () => {
    const o = this.state.orderSummary;
    axios
      .post("/test.json", o)
      .then(response => {
        console.log("Posted");
        this.setState({
          iceCream: { tastes: ["", ""], decoration: "", sauce: "" },
          isSummaryVisible: false,
          orderSummary: [],
          isCancelOrderWindowVisible: false,
          isConfirmOrderWindowVisible: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <MainWindow
          tasteList={this.state.tastesData}
          decorationList={this.state.decorationData}
          saucesList={this.state.saucesData}
          addTasteToIceCream={this.addTasteToIceCream}
          addDecorationToIceCream={this.addDecorationToIceCream}
          addSauceToIceCream={this.addSauceToIceCream}
          iceCreamTasteSummary={this.state.iceCream.tastes}
          iceCreamDecorationSummary={this.state.iceCream.decoration}
          iceCreamSauceSummary={this.state.iceCream.sauce}
          deleteTasteFromIceCream={this.deleteTasteFromIceCream}
          removeIngredientsFromIceCream={this.removeIngredientsFromIceCream}
          switchSummary={this.switchSummary}
          addIceCreamToSummary={this.addIceCreamToSummary}
          isSummaryVisible={this.state.isSummaryVisible}
          orderSummary={this.state.orderSummary}
          removeIceCreamFromSummary={this.removeIceCreamFromSummary}
          showCancelOrderWindow={this.showCancelOrderWindow}
          isCancelOrderWindowVisible={this.state.isCancelOrderWindowVisible}
          cancelOrder={this.cancelOrder}
          switchConfirmWindow={this.switchConfirmWindow}
          isConfirmOrderWindowVisible={this.state.isConfirmOrderWindowVisible}
          confirmOrder={this.confirmOrder}
        />
      </div>
    );
  }
}

export default Builder;
