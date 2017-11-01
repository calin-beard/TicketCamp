import React, {Component} from "react";
import {Container, Col} from "reactstrap";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <Col sm="3" className="sidebar-container">
                <h1 className="title">Ticket Camp</h1>
                <Container fluid>
                    <Link to="/">
                        <Button block color="primary" className="rounded">Dashboard</Button>
                    </Link>
                    <Link to="/projects">
                        <Button block color="primary" className="rounded">Projects</Button>
                    </Link>
                    <Link to="/issues">
                        <Button block color="primary" className="rounded">Issues</Button>
                    </Link>
                </Container>
                <Container fluid className="align-bottom">
                    <Link to="/settings">
                        <Button block color="primary" className="rounded">Settings</Button>
                    </Link>
                </Container>
            </Col>
        );
    }
}

export default Sidebar;
