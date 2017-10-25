import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <Col className="sidebar-container col-sm-3">
        <h1 className="title">Ticket Camp</h1>
        <ButtonGroup vertical>
          <Button color="primary" className="rounded">Dashboard</Button>
          <Button color="primary" className="rounded">Projects</Button>
          <Button color="primary" className="rounded">Issues</Button>
        </ButtonGroup>
        <ButtonGroup vertical className="align-bottom">
          <Button color="primary" className="rounded">Settings</Button>
        </ButtonGroup>
      </Col>
    );
  }
}

export default Sidebar;
