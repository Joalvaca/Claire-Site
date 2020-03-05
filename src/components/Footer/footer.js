import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-icons">(984)-242-0855</div>
        <div className="footer-icons">Info@Claire-technologies.com</div>
        <div className="footer-icons">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
        </div>
        <div className="footer-icons">
          Copyright © 2019 Claire Technologies. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
