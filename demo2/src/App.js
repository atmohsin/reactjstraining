import React from 'react';
import './App.css';
import Profile from './Profile';
import CompanyProfile from './CompanyProfile';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Profile 
        logo_url="https://niveussolutions.com/wp-content/uploads/2019/05/logo-white.png"
        title="Cloud Computing Company"/>
        <CompanyProfile/>
    </div>
  );
}

export default App;
