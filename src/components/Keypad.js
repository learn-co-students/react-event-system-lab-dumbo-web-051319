import React from 'react';
import ReactDOM from 'react-dom'

class Keypad extends React.Component{

  handlePassword = () => {console.log('Entering password...')}

render(){
  return(
    <input type="password" onKeyUp={this.handlePassword} />
    )
  }
}
export default Keypad;
// Code Keypad Component Here
