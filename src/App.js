import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row>
            <Sidebar xs="3"/>
          <Col sm="9">
            <header className="app-header">
              <h1 className="app-title text-left">TMT</h1>
            </header>
            <p className="app-intro">
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
