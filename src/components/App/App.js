import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="react-logo" className="App-logo" />
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
