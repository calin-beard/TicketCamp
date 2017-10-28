import React, { Component } from 'react';
import {Container, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import './Sidebar.css';

class Sidebar extends Component {
    handleClick(e) {
        //console.log(e);
        const page = e.target.innerText;
        this.props.onClick(page);
    }

    render() {
        return (
            <Col sm="3" className="sidebar-container">
                <h1 className="title">Ticket Camp</h1>
                <Container fluid>
                    <Button block color="primary" className="rounded"
                            onClick={this.handleClick.bind(this)}>Dashboard</Button>
                    <Button block color="primary" className="rounded"
                            onClick={this.handleClick.bind(this)}>Projects</Button>
                    <Button block color="primary" className="rounded"
                            onClick={this.handleClick.bind(this)}>Issues</Button>
                </Container>
                <Container fluid className="align-bottom">
                    <Button block color="primary" className="rounded">Settings</Button>
                </Container>
            </Col>
        );
    }
}

export default Sidebar;
