import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Header from "./Header";
import LiveOpportunitiesCard from "./LiveOpportunitiesCard";
import RequestVolunteersCard from "./RequestVolunteersCard";
import VisitWebsiteCard from "./VisitWebsiteCard";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <h1>Welcome to See it Be it in Sheffield</h1>
      <h2>Your one stop shop for employer engagement in Careers Education!</h2>
      <br />

      <Row className="landingPageCards col-lg-12 col-md-10 col-lg-8">
        <Col className="cardCol">
          <LiveOpportunitiesCard />
        </Col>
        <Col className="cardCol">
          <RequestVolunteersCard />
        </Col>
        <Col className="cardCol">
          <VisitWebsiteCard />
        </Col>
      </Row>
      <div className="footerWrapper">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
