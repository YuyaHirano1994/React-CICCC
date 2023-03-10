import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
  };

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
  }

  //random button handler
  randomize = (studentList) => {
    let newArr = studentList;
    for (let i = newArr.length - 1; 0 < i; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = newArr[i];
      newArr[i] = newArr[r];
      newArr[r] = tmp;
    }
    this.setState({ arr: newArr });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.arr.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
        </div>
        <button className="btn large" onClick={() => this.randomize(studentList)}>
          Randomize
        </button>
      </>
    );
  }
}
