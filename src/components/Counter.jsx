import React, { Component } from "react";

export class Counter extends Component {
    state = {
        headerTitle: 'Hello Counter',
        counter: 0,
    }

    add = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    reduce = () => {
        if(this.state.counter != 0) {
            this.setState({
                counter: this.state.counter -1
            })
        }
    }

    changeHeader = () => {
        this.setState({
            headerTitle: 'Counter Changed'
        })
    }

  render() {
      let {} = this.props;
    return (
      <>
      <div className="container bg-light mt-4 p-4">
          <h1>{this.state.headerTitle}</h1>
          <button className="btn btn-info m-3 py-2" onClick={this.add}>+</button>
          <span>{this.state.counter}</span>
          <button className="btn btn-success m-3 py-2" onClick={this.reduce}>-</button>
          {
              this.state.counter == 0 && (
                  <p className="text-danger">Cann't decrease counter value less than 0</p>
              )
          }
          <button className="d-block btn btn-info mt-3" onClick={this.changeHeader}>Change Header</button>
      </div>
      </>
    )
  }
}