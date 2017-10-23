import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import IssueList from './IssueList.js';
import './RecentIssues.css';
import Project1Issues from '../issues_db.json';

class RecentIssues extends Component {
  constructor(props) {
      super(props);

      this.state = {
        recent_issues: Project1Issues
      };

      console.log(Project1Issues);
  }

  render() {
    const IssueListCols = this.state.recent_issues.issue_lists.map( (item, index) => {
      return (
        <Col key={ index }>
          <IssueList list={ item } />
        </Col>
      );
    });
    return (
      <div className="recent-issues-container">
        <Row>
          { IssueListCols }
        </Row>
      </div>
    );
  }
}

export default RecentIssues;
