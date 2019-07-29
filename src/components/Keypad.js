// Code Keypad Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Keypad extends React.Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     formEntry: this.
  //   }
  // }

  handleKeyUp = () => {
    console.log('Entering password...');
  }
  render () {
    return(
      <input type="password" onKeyUp={this.handleKeyUp} />
    )
  }
}

export default Keypad;
