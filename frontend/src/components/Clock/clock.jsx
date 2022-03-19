import React, { Component } from 'react';
import '../Home/Home.css';

class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(),
            1000)
    }
    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }
    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        })
    }
    render() {
        return (
            <div className="Time">
                {this.state.time}
            </div>
        );
    }
}

export default Clock;