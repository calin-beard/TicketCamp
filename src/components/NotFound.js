import React, {Component} from "react";
import {Col} from "reactstrap";
import Header from "./Header";

class NotFound extends Component {
    render() {
        return (
            <Col sm="9">
                <Header/>
                <h1>404</h1>
                <h1>Page not found</h1>
            </Col>
        );
    }
}

export default NotFound;
