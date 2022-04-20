import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "this is default state of a class component",
            key2: "megnyomtad"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (

            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? this.state.key2 : this.state.key1}
            </button>
        )
    }
}
export default ButtonWithClass