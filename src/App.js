import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { 'contato': [] }
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
