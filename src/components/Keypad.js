import React from 'react'

export default class Keypad extends React.Component {
    render() {
        return <input  onKeyUp={this.enterPassword} type="password" />
    }

    enterPassword() {
        console.log("Entering password...")
    }
}
