import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import volunteers from "./images/Volunteers.jpg";

function LiveOpportunitiesCard() {
  return (
    <Col className="h-100">
      <Card className="opportunityCard h-100">
        <Card.Body className="landingPageCard">
          <Card.Title>
            <strong>View Live Opportunities</strong>
          </Card.Title>
          <br />
          <Card.Img
            src={volunteers}
            alt="Two volunteers speaking to a student"
          />
          <br />
          <Card.Text>
            View our current opportunities and register to get involved
          </Card.Text>
          <Link className="link btn btn-primary sibiButton" to={`/view`}>
            View Live Opportunities
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default LiveOpportunitiesCard;
