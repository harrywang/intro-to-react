import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // this binding is necesary to make 'this' work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }
    // use public class field syntax
    // no need to .bind() above
    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF" }
            </button>
        )
    }
}

export default Toggle;
