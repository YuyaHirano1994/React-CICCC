import React, { Component } from "react";
//import images
import left from "../assets/look-left.jpeg";
import right from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = {};

  // click left/right button handler goes here
  handleClickLeft = () => {
    this.setState({ src: left });
  };

  handleClickLRight = () => {
    this.setState({ src: right });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.src} alt="" />
        </div>
        <button className="btn" onClick={this.handleClickLeft}>
          ⭠
        </button>
        <button className="btn" onClick={this.handleClickLRight}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
