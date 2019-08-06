// Code EyesOnMe Component Here

import React from 'react'
import { log } from 'util';

class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log('Good!');
        
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!');
        
    }

    render(){
        return(
            <div><button onBlur={this.handleBlur} onFocus={this.handleFocus}>The Button</button>
            </div>
        )
    }
}

        export default EyesOnMe 
