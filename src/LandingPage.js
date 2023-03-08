import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HBImage from "./HenryBootImage";
import ViewOpportunitiesButton from "./ViewOpportunitiesButton";

function LandingPage() {
  return (
    <div className="landingPage">
      <HBImage />
      <ViewOpportunitiesButton />
    </div>
  );
}

export default LandingPage;
