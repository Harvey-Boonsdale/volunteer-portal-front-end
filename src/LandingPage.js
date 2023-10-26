import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";

import ViewOpportunitiesButton from "./ViewOpportunitiesButton";
import AdminLoginButton from "./AdminLoginButton";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div className="landingPage">
      <Header />
      <ViewOpportunitiesButton />
      <br />
      <AdminLoginButton />
      <Footer />
    </div>
  );
}

export default LandingPage;
