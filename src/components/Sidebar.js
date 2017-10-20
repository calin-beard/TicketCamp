import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Container">
        <h1 className="Title">TMT Software</h1>
        <Nav vertical className="Nav-container text-left">
          <NavItem>
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem> 
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Issues</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Create Issue</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Admin</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
