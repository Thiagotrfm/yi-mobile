import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import SelectedContact from './containers/selectedContact';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="table-row">
          <SelectedContact />
        </div>
      </div>
    );
  }
}

export default App;
