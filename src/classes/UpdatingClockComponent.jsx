import { Component } from "react";

export default class UpdateClockComponent extends Component {
    returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    userName = "Aryan Kashyap";
    
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            currentTime: this.returnCurrentTime(),
            counter: 0
        }
        
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
        
        setInterval(() => {
            this.setState({
                currentTime: this.returnCurrentTime()
            })
        }, 3000)
    }
    
    render() {
        return (
            <div>
                <h1>The Current Time for {this.userName} is {this.state.currentTime}</h1>
                <h2>Props Value: {this.props.userName} {this.state.counter}</h2>
            </div>
        )
    }
}