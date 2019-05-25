import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login/"
import Main from "./pages/main/"

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main}/>
        </Router>
    );
  }
}

export default App;
