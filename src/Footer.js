import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Col className="footer">
      <div>
        <Link className="link" to="/accessibility">
          Accessibility Statement
        </Link>
      </div>

      <div>
        <Link className="link" to="/login">
          Admin Area
        </Link>
      </div>
    </Col>
  );
}

export default Footer;
