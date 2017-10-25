import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RecentProjects from './RecentProjects';
import RecentIssues from './RecentIssues';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <Col className="main-container col-sm-9">
        <header className="app-header">
          <h1 className="title text-left">Dashboard</h1>
        </header>
        <Row>
          <RecentProjects />
        </Row>
        <Row>
          <RecentIssues />
        </Row>
      </Col>
    );
  }
}

export default Main;
