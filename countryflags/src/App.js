import React, { Component } from 'react';
import './App.css';
import Continent from './continents/continents'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Continent />
      </div>
    );
  }
}

export default App;
