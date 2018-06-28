import React from "react";

class Counter extends React.Component {
  constructor(){
      super()
      this.state = { count: 0}
  }
  
    render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>current count: {this.state.count }</p>
        <button onCLick = {() => this.setState({count:this.state.count +1})}
        >plus</button>
        <button onCLick = {() => this.setState({count:this.state.count -1})}>minus</button>
      </div>
    )
  }
}

export default Counter