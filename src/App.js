import React, { Component } from 'react';
import './App.css';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import {Display} from './components/Display';
import {Sidebar} from './components/Sidebar';


class App extends Component {
  render() {
    
    return (
      <div className="container row">
        <Sidebar className="item"/>
        <Display className="item"/>
      </div>
    );
  }
}

export default App;