// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handlePassword = () => {
    console.log('Entering password...');
  }
  
  render() {
    return (
      <div> 
        <input onKeyUp={this.handlePassword} type="password" /> 
      </div>
    );
  }
}

export default Keypad;
