// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

stayFocused = () => {
  console.log('Hey! Eyes on me!')
}

focusOnMe = () => {
  console.log('Good!')
}


  render() {
    return (
      <div>
        <button onBlur={this.stayFocused} onFocus={this.focusOnMe}> Eye </button>
      </div>
    )
  }
}

export default EyesOnMe;
