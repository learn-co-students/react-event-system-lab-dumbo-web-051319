// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  handleEyes = () => {
    console.log("Good!");
  }

  handleNoEyes = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <div>
        <button onFocus={this.handleEyes} onBlur={this.handleNoEyes} >BUTTON</button>
      </div>
    )
  }

}
