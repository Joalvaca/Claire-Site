import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer-section">
        <div className="footer-icons">(984)-242-0855</div>
        <div className="footer-icons">
          <a href="mailto:Info@Claire-technologies.com">
            Info@Claire-technologies.com
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/company/claire-technologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
          </a>
        </div>
        <div className="footer-icons">Copyright © 2019 Claire Technologies</div>
      </div>
    </div>
  );
}

export default Footer;
