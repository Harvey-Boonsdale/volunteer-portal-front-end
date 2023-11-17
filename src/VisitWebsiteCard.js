import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";

function VisitWebsiteCard() {
  return (
    <div>
      <Card className="opportunityCard">
        <Card.Body>
          <Card.Title>
            <strong>Find out More</strong>
          </Card.Title>
          <Card.Text>
            Visit our website to find out more about See it Be it in Sheffield
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
    </div>
  );
}

export default VisitWebsiteCard;
