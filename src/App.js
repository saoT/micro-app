import React, { Component } from 'react';
import Product from './Product';
import './App.css';

class App extends Component {
  render() {
    let legume = "carotte"
    return (
      <div className="App">
        Hello World
        {legume}
        <Product legume={legume}></Product>
      </div>
    );
  }
}

export default App;
