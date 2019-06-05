import React, { Component } from 'react'

export default class EyesOnME extends Component {

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    focus = () => {
        console.log('Good!')
    }

    render() {
        return(
            <div>
            <button onBlur={this.blur} onFocus={this.focus}>
            </button>
            </div>
        )
    }
}