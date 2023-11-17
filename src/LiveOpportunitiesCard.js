import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";

function LiveOpportunitiesCard() {
  return (
    <div>
      <Card className="opportunityCard">
        <Card.Body>
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
    </div>
  );
}

export default LiveOpportunitiesCard;
