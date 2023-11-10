import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import RequestVolunteersButton from "./RequestVolunteersButton";
import ViewOpportunitiesButton from "./ViewOpportunitiesButton";
import VisitWebsiteButton from "./VisitWebsiteButton";
import AdminLoginButton from "./AdminLoginButton";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <h1>Welcome to See it Be it in Sheffield</h1>
      <h3>Your one stop shop for employer engagement in Careers Education!</h3>
      <p>Please select from the options below:</p>

      <ViewOpportunitiesButton />
      <br />
      <RequestVolunteersButton />
      <br />
      <VisitWebsiteButton />
      <br />
      <AdminLoginButton />
      <Footer />
    </div>
  );
}

export default LandingPage;
