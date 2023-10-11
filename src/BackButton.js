import "./App.css";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div>
      <Link size="lg" className="link btn btn-primary sibiButton" to="/view">
        Go Back
      </Link>
    </div>
  );
}
export default BackButton;
