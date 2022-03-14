import React, { Component } from "react";

export class Train extends Component {
    
  state = {
    inputValue: "",
  };

  holdText = (value) => {
    this.setState({
      inputValue: value
    })
  }
  render() {
      let {} = this.props;
    return (
        <>
        <div className="container bg-light mt-4 p-4">
        <input placeholder="Type your text..." className="form-control mb-5" type="text" onChange={(e) => {this.holdText(e.target.value)}}/>
        <p className="bg-secondary text-white p-2 rounded-2">{this.state.inputValue}</p>
        </div>
        </>
    )
  }
}