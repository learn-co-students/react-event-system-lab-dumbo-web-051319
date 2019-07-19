// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

typePassword = (e) => {
  console.log("Entering password...")
}

  render() {
    return (
      <div>
        <form>

          <input
            onKeyUp={this.typePassword}
            type="password" />

        </form>
      </div>
    )
  }
}

export default Keypad;
