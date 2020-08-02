import React from "react";
import { Card, ListGroup,Badge } from "react-bootstrap";
import Moment from 'react-moment'

const IssueList = ({ issues,showDetail}) => {
  return (
    <div>
      {issues.map((issue) => (
        <IssueDetail key={issue.id} issue={issue} showDetail = {showDetail}/>
      ))}
    </div>
  );
};


const IssueDetail = ({ issue, showDetail }) => {
  
  const countLabel = ()=>{
    let finalArray = []
    for (let i = 0; i<issue.labels.length;i++){
      finalArray.push(<Badge pill variant="secondary">{issue.labels[i].name}</Badge>)
    }
    return finalArray;
  
  }

let labelArray = countLabel();

  return (
    < div >
      <Card style={{ width: '60rem' }} class = "card">
        <ListGroup variant="flush">
          <ListGroup.Item onClick = {()=>showDetail(issue)}>
            <img src={issue.user.avatar_url} alt ="" width="80px"></img>
            <h4>#{issue.number}</h4>
            <h4>{issue.title}</h4>
            <h4>@{issue.user.login}</h4>
            <p><Moment parse="YYYY-MM-DDHH:mm" fromNow> {issue.updated_at.slice(0, -4)} </Moment></p>
            <h4>{issue.comment}</h4>
            <p>{issue.body.substring(0, 100)}...</p>
            {labelArray}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div >
  )
};

export default IssueList;
