import React from 'react';
import ReactDOM from 'react-dom'

class EyesOnMe extends React.Component{

  focusHandle = () => {
    console.log('Good!')
  }

  blusHandle = () => {
    console.log('Hey! Eyes on me!')
  }

render(){
  return(
    <button onFocus = {this.focusHandle} onBlur={this.blusHandle}>change</button>
    );
  }
}
export default EyesOnMe;

// Code EyesOnMe Component Here
