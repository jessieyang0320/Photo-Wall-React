import React, { Component } from 'react';
import Tiles from './tiles';
import './App.css'


class App extends Component {
  render() {
    return (
      <Tiles data={this.props.data} />
    );
  }
}





export default App;
