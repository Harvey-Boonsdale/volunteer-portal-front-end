import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import teacher from "./images/Teacher.jpg";

function VisitWebsiteCard() {
  return (
    <Col className="h-100">
      <Card className="opportunityCard h-100">
        <Card.Img
          src={teacher}
          variant="top"
          alt="Teacher in front of a school"
        />
        <Card.Body>
          <Card.Title>
            <strong>Find out More</strong>
          </Card.Title>

          <Card.Text>
            Visit our website to find out more about our campaign
          </Card.Text>
          <Link
            size="lg"
            className="link btn btn-primary sibiButton"
            to="https://seeitbeit.lifelonglearningandskills.org/"
          >
            Visit Website
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default VisitWebsiteCard;
