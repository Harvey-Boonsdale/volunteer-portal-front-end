import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import "./App.css";
// import { Link } from "react-router-dom";

function OpportunityCard(props) {
  return (
    <div className="opportunityCard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.postToDisplay.name}</Card.Title>
          <Card.Text>School: {props.postToDisplay.school} </Card.Text>
          <Card.Text>Details: {props.postToDisplay.details}</Card.Text>
          <Card.Text>Time: {props.postToDisplay.time}</Card.Text>
          <Card.Text>Date: {props.postToDisplay.date}</Card.Text>
          <Card.Text>
            Time Commitment: {props.postToDisplay.commitment}
          </Card.Text>
          <Card.Text>Location: {props.postToDisplay.location}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OpportunityCard;
