import React, {Component} from "react";
import {Col} from "reactstrap";
import Header from "./Header";
import RecentProjects from "./RecentProjects";
import RecentIssues from "./RecentIssues";

class Dashboard extends Component {
    render() {
        return (
            <Col sm="9">
                <Header/>
                <RecentProjects/>
                <RecentIssues/>
            </Col>
        );
    }
}

export default Dashboard;
