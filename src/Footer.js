import AccessibilityStatementButton from "./AccessibilityStatementButton";
import AdminLoginButton from "./AdminLoginButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Footer() {
  return (
    <div className="footer">
      <AccessibilityStatementButton />
      <br />
      <AdminLoginButton />
    </div>
  );
}

export default Footer;
