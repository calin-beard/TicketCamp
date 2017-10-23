import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './IssueList.css';

const IssueList = (props) => {
    const IssueList = props.list.contents.map( (item, index) => {
        return <ListGroupItem key={ index }>{item.title}</ListGroupItem>;
    });

    return (
      <ListGroup>
        <p>{props.list.title}</p>
        { IssueList }
      </ListGroup>
    );
}

export default IssueList;
