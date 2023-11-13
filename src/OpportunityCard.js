import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { DateTime } from "luxon";

function OpportunityCard(props) {
  //function to register for Opportunity

  const isoString = props.postToDisplay.date;

  const formattedDate = DateTime.fromISO(isoString)
    .setZone("UTC")
    .toLocaleString(DateTime.DATE_FULL);

  // console.log(formattedDate);

  // if ((props.postToDisplay.formattedDate = "Invalid DateTime")) {
  //   console.log("Date to be agreed");
  // }

  // const isTba = props.postToDisplay.tba;
  // console.log(isTba);

  return (
    <div>
      <Card className="opportunityCard">
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
            {formattedDate === "Invalid DateTime" ? (
              <div>Date and time to be agreed</div>
            ) : (
              <div>
                <strong>Date:</strong> {formattedDate}{" "}
                <p>
                  <strong>Start Time: </strong>
                  {props.postToDisplay.startTime} <strong>Finish Time:</strong>{" "}
                  {props.postToDisplay.finishTime}
                </p>
              </div>
            )}
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
            className="link btn btn-primary sibiButton registerButton"
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
