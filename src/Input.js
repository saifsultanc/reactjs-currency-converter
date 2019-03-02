import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="input-container">
        <input
          className="input"
          type="number"
          onChange={this.props.inputHandler}
          value={this.props.value}
          placeholder="Amount in USD"
        />
      </div>
    );
  }
}

export default Input;
