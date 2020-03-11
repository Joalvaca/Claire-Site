import React from "react";
import "./header.css";
import Claire from "../../images/Claire-logo.png";
import { Link } from "react-scroll";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <div>
            <img className="logo" src={Claire} alt="platinum" />
          </div>
          <div className="nav-main">
            <Link
              className="nav-links"
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Intro
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Products
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="specifications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Specifications
            </Link>
            <Link
              className="nav-links"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
