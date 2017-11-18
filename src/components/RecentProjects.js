import React, {Component} from "react";
import {Button, ButtonGroup} from "reactstrap";

class RecentProjects extends Component {
    render() {
        return (
            <div className="recent-projects-container">
                <div>
                    <div>
                        <h1 className="title">Recently viewed</h1>
                    </div>
                </div>
                <div>
                    <ButtonGroup>
                        <div>
                            <Button size="lg" color="primary" className="rounded">Recent Project 1</Button>
                        </div>
                        <div>
                            <Button size="lg" color="primary" className="rounded">Recent Project 2</Button>
                        </div>
                        <div>
                            <Button size="lg" color="primary" className="rounded">Recent Project 3</Button>
                        </div>
                        <div>
                            <Button size="lg" color="primary" className="rounded">Recent Project 4</Button>
                        </div>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default RecentProjects;
