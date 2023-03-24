import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AdminDashboard(props) {
  return (
    <div className="landingPage">
      <div className="adminLoginButton">
        <Link size="lg" className="link btn btn-primary loginButton" to="input">
          Add Opportunity
        </Link>
      </div>
      <Button variant="danger" onClick={() => props.logoutHandler()}>
        Log Out
      </Button>
    </div>
  );
}

export default AdminDashboard;
