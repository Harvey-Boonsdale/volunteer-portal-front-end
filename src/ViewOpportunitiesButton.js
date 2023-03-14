import "./App.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ViewOpportunities() {
  return (
    <div className="adminLoginButton">
      <Link size="lg" className="link btn btn-primary loginButton" to="view">
        View Opportunities
      </Link>
    </div>
  );
}
export default ViewOpportunities;
