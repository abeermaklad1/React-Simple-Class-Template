import React, { Component } from "react";

export class About extends Component {
    state = {
        headerTitle: 'Hello From About',
    }

    changeHeader = () => {
        this.setState({
            headerTitle: 'Header Changed'
        })
    }

  render() {
    return (
      <>
      <div className="container bg-light mt-4 p-4">
          <h1>{this.state.headerTitle}</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, eligendi!</p>
          <button className="btn btn-info" onClick={this.changeHeader}>Change Header</button>
      </div>
      </>
    )
  }
}