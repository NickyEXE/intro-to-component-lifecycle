import React from 'react';
import './App.css';

import TickerContainer from "./ticker/TickerContainer"
import Welcome from "./ticker/Welcome"

class App extends React.Component {

  state = {
    ticker: true
  }

  toggleTicker = () => this.setState({ticker: !this.state.ticker})

  render(){
    return (
      <div className="App">
       {this.state.ticker ? <TickerContainer /> : <Welcome />}
       <button onClick={this.toggleTicker}>Toggle Ticker!</button>
      </div>
    );
  }
}

export default App;
