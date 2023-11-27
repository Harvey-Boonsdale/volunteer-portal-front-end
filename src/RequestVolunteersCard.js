import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import assembly from "./images/Assembly.jpg";

function RequestVolunteersCard() {
  return (
    <Col className="h-100">
      <Card className="opportunityCard h-100">
        <Card.Body className="landingPageCard">
          <Card.Title>
            <strong>Request Volunteers</strong>
          </Card.Title>
          <br />

          <Card.Img
            src={assembly}
            alt="Two volunteers talking to an assembly"
          />
          <br />
          <Card.Text>
            Request volunteers for Careers Education activities in your setting
          </Card.Text>
          <Link
            size="lg"
            className="link btn btn-primary sibiButton"
            to="https://forms.office.com/Pages/ResponsePage.aspx?id=uVm6oQRy2EijYHdwJFrUqcf1fQd2XsZCr66A0fuL99FUN1k3Qk9PR0lPS1FWSUdYVUQySkU0TURFRCQlQCN0PWcu"
          >
            Request volunteers
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default RequestVolunteersCard;
