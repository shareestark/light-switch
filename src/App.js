import React, { Component } from "react";
import { Switch } from "./Switch.js";


class App extends Component {
  
  state = { on: true };
  
  toggle = () => {
      const isOn = this.state.on;
      this.setState({on:!isOn});
    };
    
    render() {
      let wallClass = "wall off";
      if (this.state.on) {
        wallClass = "wall on";
      }
    
    return (
      <div className={wallClass}>
        <Switch toggle={this.toggle} />
        <Switch toggle={this.toggle}/>
      </div>
    );
  }
}

export default App;
