import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";

function LiveOpportunitiesCard() {
  return (
    <Col className="h-100">
      <Card className="opportunityCard h-100">
        <Card.Body className="landingPageCard">
          <Card.Title>
            <strong>View Live Opportunities</strong>
          </Card.Title>
          <Card.Text>
            View all of our current live opportunities and register to get
            involved
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
