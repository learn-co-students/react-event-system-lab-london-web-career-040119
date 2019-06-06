import React from 'react'

export default class EyesOnMe extends React.Component {
    render() {
        return <button onBlur={this._onBlur}
        onFocus={this._onFocus}></button>
    }

    _onBlur() {
        console.log("Hey! Eyes on me!")
    }

    _onFocus() {
        console.log("Good!")
    }
}