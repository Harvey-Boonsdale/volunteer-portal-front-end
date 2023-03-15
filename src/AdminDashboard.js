import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

function AdminDashboard(props) {
  return (
    <div className="landingPage">
      <Button variant="danger" onClick={() => props.logoutHandler()}>
        Log Out
      </Button>
    </div>
  );
}

export default AdminDashboard;
