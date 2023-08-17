import AdminLoginButton from "./AdminLoginButton";
import PartnerLogos from "./PartnerLogos";
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
