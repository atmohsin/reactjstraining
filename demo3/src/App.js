import React from 'react';
import logo from './logo.svg';
import './App.css';
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Initial Data"
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({data: "Data Updated parent....."});
  }
  render(){
    return(
      <div>
        <button onClick = {this.updateState}>Click</button>
        <h4>{this.state.data}</h4>
        <MyContent myDataProp={this.state.data} updateStateProp={this.updateState}/>
      </div>
    );
  }
}

class MyContent extends React.Component {
  render() {
    return(
      <div>
        <button onClick = {this.props.updateStateProp}>Click from MyContent</button>  
        <h4>{this.props.myDataProp}</h4>
      </div>  
    );
  }
}


class App1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data+1});
  }

  render() {
    return(
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <MyNumber myNumber={this.state.data}/>
      </div>
    );
  }
}

class MyNumber extends React.Component {
  componentWillMount() {
    console.log('Component will Mount...');
  }
  componentDidMount() {
    console.log('Component DID Mount...');
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL Receive Props ....');
  }
  shouldComponentUpdate(newProps,newState) {
    return true;
  }
  componentWillUpdate(nextProps,nextState) {
    console.log('Component WILL Update');
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('Component DID Update...');
  }
  componentWillUnmount() {
    console.log('Component WILL UnMount...');
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

class AppOld extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "Header from state...",
      content: "Content from state...",
      data:[]
    }
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  setStateHandler() {
    var item = "setState..."
    var myArray = this.state.data.slice();
    myArray.push(item);
    this.setState({data:myArray})
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }


  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>

        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>

        <Header headerProp= {this.state.header}/>
        <Content contentProp={this.state.content}/>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>

        <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
        <h4>Random Number : {Math.random()}</h4>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>{this.props.contentProp}</p>
      </div>
    );
  }
}

export default App;
