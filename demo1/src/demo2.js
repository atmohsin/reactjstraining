const e = React.createElement;

class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {"username": ""}
        this.handleChange = this.handleChange.bind(this);
    }
    // component methods
    // ReactJS Component Mounting Methods
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        console.log(props, state)
        return {}
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    // ReactJS Component Updating Methods
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    // ReactJS Component Unmounting Methods
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    // custom methods
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    render(){
        console.log("render")
        return(
            <form>
                <label>Name: </label>
                <input name="username" onChange={this.handleChange}/>
                <br/>
                Your name is "{this.state.username}"
            </form>
        );
    }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LifeCycleMethods), domContainer);