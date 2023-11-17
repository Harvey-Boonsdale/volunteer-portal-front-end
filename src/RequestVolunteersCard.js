import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";

function RequestVolunteersCard() {
  return (
    <div>
      <Card className="opportunityCard">
        <Card.Body>
          <Card.Title>
            <strong>Request Volunteers</strong>
          </Card.Title>
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
    </div>
  );
}

export default RequestVolunteersCard;
