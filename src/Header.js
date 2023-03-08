import MyNav from "./Navbar";
import SIBILogo from "./SIBILogo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <SIBILogo />
      <MyNav />
    </div>
  );
}

export default Header;
