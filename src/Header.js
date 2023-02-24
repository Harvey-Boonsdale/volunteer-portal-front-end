import MyNav from "./Navbar";
import SIBILogo from "./SIBILogo";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

function Header() {
  return (
    <>
      <SIBILogo />
      <MyNav />
    </>
  );
}

export default Header;
