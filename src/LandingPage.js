import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import LiveOpportunitiesCard from "./LiveOpportunitiesCard";
import RequestVolunteersCard from "./RequestVolunteersCard";
import VisitWebsiteCard from "./VisitWebsiteCard";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <h1>Welcome to See it Be it in Sheffield</h1>
      <h2>Your one stop shop for employer engagement in Careers Education!</h2>
      <br />

      <Container>
        <Row>
          <Col className="col-sm mb-3">
            <LiveOpportunitiesCard />
          </Col>
          <Col className="col-sm mb-3">
            <RequestVolunteersCard />
          </Col>
          <Col className="col-sm mb-3">
            <VisitWebsiteCard />
          </Col>
        </Row>
      </Container>
      <Row>
        <Link className="link" to="/accessibility">
          Accessibility Statement
        </Link>
        <Link className="link" to="/login">
          Admin Area
        </Link>
      </Row>
    </div>
  );
}

export default LandingPage;
