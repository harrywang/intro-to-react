import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            text_value: 'this is the essay',
            select_value: 'coconut',
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value.toUpperCase()});
        console.log('event target value is: ' + event.target);
    }

    handleTextAreaChange = (event) => {
        this.setState({text_value: event.target.value.toUpperCase()});
        console.log('event target value is: ' + event.target);
    }

    handleSelectChange = (event) => {
        this.setState({select_value: event.target.value});
        console.log('event target value is: ' + event.target);
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.select_value);
        console.log('event target value is: ' + event.target);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <textarea value={this.state.textvalue} onChange={this.handleTextAreaChange} />
                    <select value={this.state.select_value} onChange={this.handleSelectChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default NameForm;
