import "./App.css";

import { Link } from "react-router-dom";

function ViewOpportunities() {
  return (
    <div>
      <Link size="lg" className="link btn btn-primary sibiButton" to="view">
        View Opportunities
      </Link>
    </div>
  );
}
export default ViewOpportunities;
