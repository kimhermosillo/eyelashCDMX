import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import Contact from './Contact';
import Service from './Service';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav />
          <p>
           Eyelash studio
       

           <Contact />
           <Service />
           <Gallery />
          </p>
         
        </header>
      </div>
    );
  }
}

export default App;
