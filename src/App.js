import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import { Button } from 'reactstrap';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col xs="3" className="Sidebar-container">
            <Sidebar />
          </Col>
          <Col sm="9">
            <header className="App-header">
              <h1 className="App-title text-left">TMT</h1>
            </header>
            <p className="App-intro">
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
