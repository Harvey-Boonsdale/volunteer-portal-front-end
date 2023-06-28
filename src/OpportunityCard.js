import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { DateTime } from "luxon";

function OpportunityCard(props) {
  //function to register for Opportunity

  const isoString = props.postToDisplay.date;

  const formatted = DateTime.fromISO(isoString)
    .setZone("UTC")
    .toLocaleString(DateTime.DATE_FULL);

  console.log(formatted);

  return (
    <div>
      <Card style={{ width: "20rem", height: "32rem " }}>
        <Card.Body>
          <Card.Title>
            <strong>
              {props.postToDisplay.name} at {props.postToDisplay.school}
            </strong>
          </Card.Title>
          <Card.Text>
            <strong>Details:</strong> {props.postToDisplay.details}
          </Card.Text>
          <Card.Text>
            <strong>Date:</strong> {formatted}
          </Card.Text>
          <Card.Text>
            <strong>Start:</strong> {props.postToDisplay.startTime}{" "}
            <strong>Finish:</strong> {props.postToDisplay.finishTime}
          </Card.Text>

          <Card.Text>
            <strong>Time Commitment:</strong> {props.postToDisplay.commitment}
          </Card.Text>
          <Card.Text>
            <strong>Year Group:</strong> {props.postToDisplay.year}
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
