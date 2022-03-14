import React, { Component } from "react";

export class Card extends Component {
  render() {
      let {title, price, btnTitle} = this.props;
    return (
      <>
        <div className="card mx-3 my-3 col-4 text-center" style={{width: "18rem"}}>
          <img src="https://www.digitalhubcity.com/wp-content/uploads/2021/07/e2-removebg-preview.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text bg-light">
              {price}
            </p>
            <p class="card-text">Some quick example text to build on the card title and make up.</p>
            <a href="#" className="btn btn-primary">
              {btnTitle}
            </a>
          </div>
        </div>
      </>
    );
  }
}
