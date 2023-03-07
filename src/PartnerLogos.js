import ESFLogo from "./images/ESFLogo.png";
import SBTLogo from "./images/SBTLogo.png";
import CareersHubLogo from "./images/CareersHubLogo.png";
import SCCLogo from "./images/SCCLogo.png";

function PartnerLogos() {
  return (
    <div className="partnerLogos">
      <img
        className="logos"
        style={{ height: 80 }}
        src={ESFLogo}
        alt="ESF Logo"
      />
      <img
        className="logos"
        style={{ height: 80 }}
        src={SBTLogo}
        alt="Sheffield Business Together Logo"
      />
      <img
        className="logos"
        style={{ height: 80 }}
        src={CareersHubLogo}
        alt="South Yorkshire Careers Hub Logo"
      />
      <img
        className="logos"
        style={{ height: 80 }}
        src={SCCLogo}
        alt="Sheffield City Council Logo"
      />
    </div>
  );
}
export default PartnerLogos;
