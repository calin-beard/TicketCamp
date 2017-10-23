import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar';
import RecentProjects from './components/RecentProjects';
import RecentIssues from './components/RecentIssues';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row>
            <Sidebar xs="3"/>
          <Col sm="9">
            <header className="app-header">
              <h1 className="title text-left">Dashboard</h1>
            </header>
            <RecentProjects />
            <RecentIssues />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
