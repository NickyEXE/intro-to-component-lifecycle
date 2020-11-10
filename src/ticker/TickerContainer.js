import React from 'react'
import Ticker from './Ticker'

// 1. when the app loads, start rendering a random number 1-100 every second
// 2. when the user clicks the stop button, stop the timer... and if they click again, restart
// 3. if the new number is higher, show it in green and if it is lower show it in red

class TickerContainer extends React.Component {

  render(){
    return (
      <div className="box">
        <button>Stop/Start Ticker</button>
        <Ticker number={3}/>
      </div>
    );
  }
}



export default TickerContainer
