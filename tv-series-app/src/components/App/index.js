import React from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../Main';


class App extends React.Component {

  render() {
    return (
      <div className = "App">
        <header className="App-header">
          <h1 className ="App-title">TV Series List</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
