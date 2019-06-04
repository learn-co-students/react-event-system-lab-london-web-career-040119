// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
    
    handleInputPassword = () => console.log('Entering password...')

    render() {
        // brackets are needed for this return statement
        return (
            <div>
                <input 
                    onKeyUp={this.handleInputPassword}
                    type="password" 
                />
            </div>
        )
    }
}

export default Keypad