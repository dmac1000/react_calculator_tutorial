import React, { Component } from "react";
import "./app.css";
import Title from "./components/Title";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      heading: "Simple Calculator"
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <br/>
        <Title
          heading={this.state.heading}
        />
        <div className="calculator-body">
        <br/>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
