import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './myComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent title="MakeSchool" />
      </div>
    );
  }
}

export default App;
