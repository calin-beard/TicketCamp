import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <h1 className="title">TMT Software</h1>
        <ButtonGroup vertical>
          <Button className="rounded">Dashboard</Button>
          <Button className="rounded">Projects</Button>
          <Button className="rounded">Issues</Button>
        </ButtonGroup>
        <ButtonGroup vertical className="align-bottom">
          <Button className="rounded">Settings</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Sidebar;
