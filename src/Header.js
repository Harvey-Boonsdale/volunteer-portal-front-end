import SIBILogo from "./SIBILogo";
import PartnerLogos from "./PartnerLogos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <SIBILogo />
      <PartnerLogos />
    </div>
  );
}

export default Header;
