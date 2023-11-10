import SIBILogo from "./SIBILogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PartnerLogos from "./PartnerLogos";
import Row from "react-bootstrap/esm/Row";

function Header() {
  return (
    <Row className="header">
      <SIBILogo />
      <br />
      <PartnerLogos />
    </Row>
  );
}

export default Header;
