import React, {Component} from 'react';
import {Row} from 'reactstrap';
import RecentProjects from './RecentProjects';
import RecentIssues from './RecentIssues';
import './Main.css';

class Main extends Component {
    render() {
        const page = this.props.page;
        if (page === 'Dashboard')
            return (
                <div>
                    <Row>
                        <RecentProjects/>
                    </Row>
                    <Row>
                        <RecentIssues/>
                    </Row>
                </div>

            );
        else
            return <Row noGutters={true}>To be implemented</Row>
    }
}

export default Main;
