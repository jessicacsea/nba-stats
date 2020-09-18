import React, { Component } from 'react';
import './App.css';

// my components
import Filter from './components/Filter.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <h1>NBA Stats</h1>
          </div>
        </header>
          
          <Filter ></Filter>
      </div>
    );
  }
}

export default App;
