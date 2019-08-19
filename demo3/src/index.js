import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const greeting = React.createElement('h1',null,'Welcome to React.')
ReactDOM.render(<App headerProp="Header from Prop" contentProp="Content from Prop"/>, document.getElementById('root'));

//setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//  },10000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
