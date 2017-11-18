import React, {Component} from "react";
import IssueList from "./IssueList.js";
import Project1Issues from "../issues_db.json";

class RecentIssues extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recent_issues: Project1Issues
        };
    }

    render() {
        const IssueListCols = this.state.recent_issues.issue_lists.map((item, index) => {
            return (
                <div key={index}>
                    <IssueList list={item}/>
                </div>
            );
        });
        return (
            <div className="recent-issues-container">
                <div>
                    {IssueListCols}
                </div>
            </div>
        );
    }
}

export default RecentIssues;
