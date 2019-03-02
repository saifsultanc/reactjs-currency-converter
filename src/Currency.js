import React, { Component } from "react";
import AnimatedNumber from "react-animated-number";

class Currency extends Component {
  currencyConversion(value, amount) {
    return (value * amount).toFixed(2);
  }

  render() {
    return (
      <div className="currency-container">
        <div>
          <span>{this.props.currencyName}</span>
          <span>
            (1 USD = {this.props.currencyValue + " " + this.props.currencyName})
          </span>
        </div>

        <div>
          {this.props.amount + " USD = "}
          <span className="converted">
            {this.props.currencyName + " "}
            <AnimatedNumber
              value={this.currencyConversion(
                this.props.currencyValue,
                this.props.amount
              )}
              duration={1000}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Currency;
