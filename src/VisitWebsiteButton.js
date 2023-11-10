import "./App.css";

import { Link } from "react-router-dom";

function VisitWebsite() {
  return (
    <div>
      <Link
        size="lg"
        className="link btn btn-primary sibiButton"
        to="https://seeitbeit.lifelonglearningandskills.org/"
      >
        Visit website
      </Link>
    </div>
  );
}
export default VisitWebsite;
