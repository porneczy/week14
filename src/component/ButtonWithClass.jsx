import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "this is default state of a class component",
            key2: 0
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
            <>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "sadsads" : this.state.key1}
                </button>
                <button onClick={ () => this.setState({key2:1})}>
                    {this.state.key2}
                </button>
            </>
        )
    }
}
export default ButtonWithClass