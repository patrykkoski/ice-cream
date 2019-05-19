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
    orderSummary: []
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

  switchSummary = () => {
    let summaryPlaceholder = this.state.isSummaryVisible;
    this.setState({ isSummaryVisible: !summaryPlaceholder });
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
          switchSummary={this.switchSummary}
          addIceCreamToSummary={this.addIceCreamToSummary}
          isSummaryVisible={this.state.isSummaryVisible}
          orderSummary={this.state.orderSummary}
        />
      </div>
    );
  }
}

export default Builder;
