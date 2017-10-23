import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './RecentProjects.css';

class RecentProjects extends Component {
  render() {
    return (
      <div className="recent-projects-container">
        <h1 className="title">Recently viewed</h1>
        <ButtonGroup>
          <Button size="lg" color="primary" className="rounded">Recent Project 1</Button>
          <Button size="lg" color="primary" className="rounded">Recent Project 2</Button>
          <Button size="lg" color="primary" className="rounded">Recent Project 3</Button>
          <Button size="lg" color="primary" className="rounded">Recent Project 4</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default RecentProjects;
