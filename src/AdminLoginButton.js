import "./App.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="adminLoginButton">
      <Link size="lg" className="link btn btn-primary loginButton" to="login">
        Admin Area
      </Link>
    </div>
  );
}
export default AdminLogin;
