import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import './RecentProjects.css';

class RecentProjects extends Component {
  render() {
    return (
      <div className="recent-projects-container">
        <Row>
          <Col>
            <h1 className="title">Recently viewed</h1>
          </Col>
        </Row>
        <Row>
          <ButtonGroup>
            <Col>
              <Button size="lg" color="primary" className="rounded">Recent Project 1</Button>
            </Col>
            <Col>
              <Button size="lg" color="primary" className="rounded">Recent Project 2</Button>
            </Col>
            <Col>
              <Button size="lg" color="primary" className="rounded">Recent Project 3</Button>
            </Col>
            <Col>
              <Button size="lg" color="primary" className="rounded">Recent Project 4</Button>
            </Col>
          </ButtonGroup>
        </Row>
      </div>
    );
  }
}

export default RecentProjects;
