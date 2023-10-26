import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

function AdminDashboard(props) {
  return (
    <div className="dashboard">
      <div>
        <Link size="lg" className="link btn btn-primary sibiButton" to="input">
          Add Opportunity
        </Link>
      </div>
      <br />
      <div>
        <Link size="lg" className="link btn btn-primary sibiButton" to="/view">
          Edit Opportunities
        </Link>
      </div>
      <br />
      <Button variant="danger" onClick={() => props.logoutHandler()}>
        Log Out
      </Button>
    </div>
  );
}

export default AdminDashboard;
