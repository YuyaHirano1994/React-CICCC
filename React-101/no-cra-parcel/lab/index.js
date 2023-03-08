import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

// class App extends React.Component {
//   render() {
//     return <>
//     </>
//   }
// }

const App = () => {
  return (
    <>
      <Button />
    </>
  );
};

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
