import React, { Component } from "react";
import Input from "./Input";
import Currency from "./Currency";
import API from "./API";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      currencyToConvert: 1
    };

    this.convertCurrency = this.convertCurrency.bind(this);
  }

  componentWillMount() {
    API.get().then(payload => {
      const payloadRates = payload["rates"];
      const currencies = Object.keys(payloadRates).map((item, index) => {
        return { currencyName: item, currencyValue: payloadRates[item] };
      });

      this.setState({
        currencies
      });
    });
  }

  convertCurrency(event) {
    this.setState({
      currencyToConvert: +event.target.value
    });
  }

  render() {
    let iterator = 0;
    return (
      <div className="container">
        <div className="header">USD Currency Converter</div>
        <Input
          value={this.state.currencyToConvert}
          inputHandler={this.convertCurrency}
        />
        {this.state.currencies.map(currency => {
          return (
            <Currency
              {...currency}
              amount={this.state.currencyToConvert}
              key={iterator++}
            />
          );
        })}
      </div>
    );
  }
}

export default CurrencyConverter;
