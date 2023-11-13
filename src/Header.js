import SIBILogo from "./SIBILogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Row from "react-bootstrap/esm/Row";

function Header() {
  return (
    <Row className="header">
      <SIBILogo />
    </Row>
  );
}

export default Header;
