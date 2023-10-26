import "./App.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div>
      <Link size="lg" className="link btn btn-primary sibiButton" to="login">
        Admin Login
      </Link>
    </div>
  );
}
export default AdminLogin;
