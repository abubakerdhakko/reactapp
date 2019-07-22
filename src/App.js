import React, { Component } from "react";
// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
// import CostumModel from "./components/c/CustomModal";

import { Provider } from "./components/Context"

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header/>
        {/* <CostumModel></CostumModel> */}
        <Contacts />
      </div>
      </Provider>
    );
  }
}
// render(<App />, document.getElementById('root'));

export default App;
