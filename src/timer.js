
import React,{Component} from 'react'
import ReactDOM from 'react-dom'



class IncrementChanger extends Component {
    constructor(props) {
        super(props);

        this.state = { increment: 1 }
    }

    onChange = (e) => {
        if (!e || !e.target || !e.target.value) { return; }
        this.setState({ increment: (parseInt(e.target.value)/10) });
    }
    render() {
        return (
            <div>
                Change increment:
                <input type="range" min="0" max="100" step="1" onChange={this.onChange} value={this.state.increment*10} />
                Current: {this.state.increment}
                <br />
                <RateChanger increment={this.state.increment} />
            </div>
        );
    }
}

class RateChanger extends Component {
    constructor(props) {
        super(props);

        this.state = {rate:1000}
    }

    onChange =(e)=>{
        if(!e || !e.target || !e.target.value ){return;}
        this.setState({rate: parseInt(e.target.value)});
    }
    render() {
        return (
            <div>
                Change rate:
                <input type="range" min="0" max="2000" step="1" onChange={this.onChange} value={this.state.rate}/>
                Current: {this.state.rate}
                <br/>
                <TimeManager rate={this.state.rate} {...this.props}/>                
            </div>
        );
    }
}

class TimeManager extends Component 
{
    constructor(props){
        super(props);
        this.state = { startTime: 1 };
    }

    render(){
        return(
            <Timer time={this.state.startTime} {...this.props}/>
        );
    }
}

class Timer extends Component{
    constructor(props){
        super(props);

        this.state = { time: this.props.time, rate: this.props.rate || 1000};
    }

    incrementTime = () => {        
        let state = {...this.state};
        state.time += this.props.increment;
        this.setState(state);
    }

    componentDidMount = () => {
        this.interval = setInterval(this.incrementTime, this.props.rate);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    componentWillUpdate = () =>{
        clearInterval(this.interval);
        this.interval = setInterval(this.incrementTime, this.props.rate);
    }
  
    render(){
        return(
            <div>
                <div>
                    Timer: 
                    <label>{this.state.time}</label>
                </div>
            </div>
        );
    }
}

export { Timer, TimeManager, RateChanger, IncrementChanger}