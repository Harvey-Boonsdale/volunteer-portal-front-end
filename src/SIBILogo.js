import "./App.css";
import sibi from "./images/SIBILogo.png";
import { Link } from "react-router-dom";

function SIBILogo() {
  return (
    <div className="sibiLogo">
      <Link to="/">
        <img src={sibi} alt="See it Be it Logo" />
      </Link>
    </div>
  );
}
export default SIBILogo;
