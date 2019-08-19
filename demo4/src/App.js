import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>
    <hr/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/users" component={Users}/>
  </div>
  );
}

export default App;
