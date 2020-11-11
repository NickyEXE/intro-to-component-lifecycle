import React from 'react'
import Ticker from './Ticker'

// 1. when the app loads, start rendering a random number 1-100 every second
// 2. when the user clicks the stop button, stop the timer... and if they click again, restart
// 3. if the new number is higher, show it in green and if it is lower show it in red

// componentDidMount()

// componentDidUpdate()

// componentWillUnmount()

// We don't need a component lifecycle method


class TickerContainer extends React.Component {

  state = {
    number: 3,
    interval: null,
    color: "white"
  }

  componentDidMount(){
    this.createInterval()
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.number > prevState.number){
      this.setState({color: "green"})
    } else if (this.state.number < prevState.number) {
      this.setState({color: "red"})
    }
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  createInterval = () => {
    const getRandomNumber = () => Math.ceil(Math.random()*100)
    const interval = setInterval(() => {
      console.log("this interval keeps on ticking along")
      this.setState({number: getRandomNumber()})
    }, 1000)
    this.setState({interval})
  }

  toggleInterval = () => {
    if (this.state.interval){
      clearInterval(this.state.interval)
      this.setState({interval: null})
    } else {
      this.createInterval()
    }
  }

  render(){
    return (
      <div className="box" style={{backgroundColor: this.state.color}}>
        <button onClick={this.toggleInterval}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer
