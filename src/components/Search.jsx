import React, { Component } from "react";

export class Search extends Component {
   

  render() {
    let {id, header, desc} = this.props;

    return (
      <>
      
      <div className="card w-25 mx-3 my-3 col-4 text-center" style={{width: "18rem"}}>
          <img src="https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{header}</h5>
            <p class="card-text">{desc}</p>
            <a href="#" className="btn btn-primary">
              Add
            </a>
          </div>
        </div>
      
      </>
    )
  }
}
