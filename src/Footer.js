import PartnerLogos from "./PartnerLogos";
import AdminLoginButton from "./AdminLoginButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Footer() {
  return (
    <div className="footer">
      <AdminLoginButton />
      <PartnerLogos />
    </div>
  );
}

export default Footer;
