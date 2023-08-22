import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./App.css";
import { DateTime } from "luxon";

function AdminCard(props) {
  //Format date

  const isoString = props.postToDisplay.date;

  const formattedDate = DateTime.fromISO(isoString)
    .setZone("UTC")
    .toLocaleString(DateTime.DATE_FULL);

  //function to delete on click

  const deleteHandler = async (e) => {
    props.client.deleteOpportunity(props.postToDisplay._id);
    props.listOpportunities();
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <strong>
              {props.postToDisplay.name} at {props.postToDisplay.school}{" "}
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
                <strong>Start Time: </strong>
                {props.postToDisplay.startTime} <strong>Finish Time:</strong>{" "}
                {props.postToDisplay.finishTime}
              </div>
            )}
          </Card.Text>
          <Card.Text>
            <strong>Year Group:</strong> {props.postToDisplay.year}
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
            to={`/edit/${props.postToDisplay._id}`}
          >
            Edit Opportunity
          </Link>{" "}
          <Button variant="danger" onClick={() => deleteHandler()}>
            Delete Opportunity
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminCard;
