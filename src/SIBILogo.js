import "./App.css";
import sibi from "./images/SIBILogo.png";
import { Link } from "react-router-dom";

function SIBILogo() {
  return (
    <div>
      <Link to="/">
        <img src={sibi} alt="See it Be it in Sheffield Logo" />
      </Link>
    </div>
  );
}
export default SIBILogo;
