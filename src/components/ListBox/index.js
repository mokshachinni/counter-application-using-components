import { Component } from 'react'

class Sample extends Component {

    state={counter:0}

    increasingCounter = ()=>{
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }

    decreasingCounter = ()=>{
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
    
    resetCounter= ()=>{
        this.setState({counter:0})
    }

  render() {
    const {counter} = this.state;

    return (
      <div>
      <h1>Class Counter</h1>
      <p>{counter}</p>
        <button type="button" onClick={this.decreasingCounter}>decrease</button>
        <button type="button" onClick={this.resetCounter}>reset</button>
        <button type="button" onClick={this.increasingCounter}>increase</button>
      </div>
    )
  }
}

export default Sample
