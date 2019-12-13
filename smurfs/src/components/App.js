import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: "silver", height: "100%" }}>
        <br />
        <span
          style={{
            marginBottom: "80px",
            fontWeight: "bold",
            fontSize: "40px",
            paddingBottom: "90px"
          }}
        >
          Let's make a smurf Village !
        </span>
        <Form />
      </div>
    );
  }
}

export default App;
