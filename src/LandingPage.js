import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import RequestVolunteersButton from "./RequestVolunteersButton";
import ViewOpportunitiesButton from "./ViewOpportunitiesButton";
import VisitWebsiteButton from "./VisitWebsiteButton";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <h1>Welcome to See it Be it in Sheffield</h1>
      <h2>Your one stop shop for employer engagement in Careers Education!</h2>
      <p>Please select from the options below:</p>

      <ViewOpportunitiesButton />
      <br />
      <RequestVolunteersButton />
      <br />
      <VisitWebsiteButton />
      <br />

      <Footer />
    </div>
  );
}

export default LandingPage;
