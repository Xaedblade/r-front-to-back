import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Smith"
          email="jsmith884@ghmail.com"
          phone="333-333-3333"
        />
        <Contact
          name="Sarah Smith"
          email="ssmith884@ghmail.com"
          phone="444-444-4444"
        />
      </div>
    );
  }
}

export default App;
