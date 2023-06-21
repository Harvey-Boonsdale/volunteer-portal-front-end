import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./App.css";

function OpportunityCard(props) {
  //function to register for Opportunity

  return (
    <div>
      <Card style={{ width: "27rem" }}>
        <Card.Body>
          <Card.Title>
            <strong>{props.postToDisplay.name}</strong>
          </Card.Title>
          <Card.Text>{props.postToDisplay.school} </Card.Text>
          <Card.Text>
            <strong>Details:</strong> {props.postToDisplay.details}
          </Card.Text>
          <Card.Text>
            <strong>Year Group:</strong> {props.postToDisplay.year}
          </Card.Text>
          <Card.Text>
            <strong>Start Time:</strong> {props.postToDisplay.startTime}
          </Card.Text>
          <Card.Text>
            <strong>Finish Time:</strong> {props.postToDisplay.finishTime}
          </Card.Text>
          <Card.Text>
            <strong>Date:</strong> {props.postToDisplay.date}
          </Card.Text>
          <Card.Text>
            <strong>Time Commitment:</strong> {props.postToDisplay.commitment}
          </Card.Text>
          <Card.Text>
            <strong>Location:</strong> {props.postToDisplay.location}
          </Card.Text>
          <Card.Text>
            <strong>Additional Info:</strong> {props.postToDisplay.info}
          </Card.Text>
          <Link
            className="link btn btn-primary sibiButton"
            to={`/registration/${props.postToDisplay._id}`}
          >
            Register for Opportunity
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OpportunityCard;
