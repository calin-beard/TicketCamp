import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row noGutters={true}>
            <Sidebar/>
            <Main/>
        </Row>
      </div>
    );
  }
}

export default App;
