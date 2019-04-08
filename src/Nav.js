import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import App from './App';
import Contact from './Contact';
import Gallery from './Gallery';
import Service from './Service';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      
  
         
         <Contact/>
         <Gallery/>
         <Service/>
         

      </div>
    );
  }
}

export default Nav;
