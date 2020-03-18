import React from 'react';
function FormattedDate(props) {
    return <h3>this is {props.date.toLocaleTimeString()}</h3>
}
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h3>This is the Clock Component</h3>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

export default Clock;
