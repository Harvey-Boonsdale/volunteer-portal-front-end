import Nav from "react-bootstrap/Nav";
import "./App.css";
// import { Link } from "react-router-dom";

function MyNav() {
  return (
    <div className="navBar">
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link className="navLink" href="/home">
            View Opportunities
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/home">
            About See it Be it
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navLink" href="/home">
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default MyNav;
