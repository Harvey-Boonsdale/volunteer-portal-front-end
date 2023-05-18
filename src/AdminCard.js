import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./App.css";

function AdminCard(props) {
  //function to delete on click

  const deleteHandler = async (e) => {
    props.client.deleteOpportunity(props.postToDisplay._id);
    props.listOpportunities();
  };

  return (
    <div>
      <Card style={{ width: "20rem" }}>
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
          <Link
            className="link btn btn-primary loginButton"
            to={`/edit/${props.postToDisplay._id}`}
          >
            Edit Event
          </Link>
          <Button variant="danger" onClick={() => deleteHandler()}>
            Delete Event
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AdminCard;
