import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";

import ViewOpportunitiesButton from "./ViewOpportunitiesButton";
import WelcomeText from "./WelcomeText";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <WelcomeText />
      <ViewOpportunitiesButton />
      <Footer />
    </div>
  );
}

export default LandingPage;
