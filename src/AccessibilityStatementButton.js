import "./App.css";

import { Link } from "react-router-dom";

function ViewAccessibilityStatement() {
  return (
    <div>
      <Link
        size="lg"
        className="link btn btn-primary sibiButton footerButton"
        to="/accessibility"
      >
        Accessibility Statement
      </Link>
    </div>
  );
}
export default ViewAccessibilityStatement;
