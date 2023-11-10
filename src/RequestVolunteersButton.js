import "./App.css";

import { Link } from "react-router-dom";

function RequestVolunteers() {
  return (
    <div>
      <Link
        size="lg"
        className="link btn btn-primary sibiButton"
        to="https://forms.office.com/Pages/ResponsePage.aspx?id=uVm6oQRy2EijYHdwJFrUqcf1fQd2XsZCr66A0fuL99FUN1k3Qk9PR0lPS1FWSUdYVUQySkU0TURFRCQlQCN0PWcu"
      >
        Request volunteers
      </Link>
    </div>
  );
}
export default RequestVolunteers;
