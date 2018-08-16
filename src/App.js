import React, { Component } from 'react';
import Contact from './components/contacts';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 'contato': [] }
  }

  render() {
    return (
      <div className="App">
        <Contact />
      </div>
    );
  }
}

export default App;
