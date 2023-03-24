import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

function OpportunityCard(props) {
  //function to register for

  const registrationHandler = () => {
    alert("Registration Complete");
  };

  return (
    <div className="opportunityCard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <strong>{props.postToDisplay.name}</strong>
          </Card.Title>
          <Card.Text>
            <strong>School:</strong> {props.postToDisplay.school}{" "}
          </Card.Text>
          <Card.Text>
            <strong>Details:</strong> {props.postToDisplay.details}
          </Card.Text>
          <Card.Text>
            <strong>Time:</strong> {props.postToDisplay.time}
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
          <Button className="loginButton" onClick={() => registrationHandler()}>
            Register for Opportunity
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OpportunityCard;
