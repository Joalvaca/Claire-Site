import React from "react";
import "./products.css";
import Platinum from "./images/plat.png";
import C1 from "./images/c1.png";
import Silver from "./images/silver.png";
import Claire from "../../images/Claire-logo.png";

function Products() {
  return (
    <div className="products">
      <div className="product-section">
        <div className="product-header">
          <img className="product-logo" src={Claire} alt="platinum" />
        </div>
        <p className="product-intro" id="products">
          All of our units come with the Claire guarantee, this guarantee states
          that each of our units uses no chemicals, no power and comes with a
          99.9% disinfection rate against E.coli.
        </p>
      </div>
      <div className="water-units">
        <div className="unit">
          <div className="unit-section">
            <img className="platinum" src={Platinum} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Platinum</h1>
            <p className="product-description">
              Introducing our Platinum unit, perfect for homes that use well
              water.
            </p>
          </div>
          <div className="bar"></div>
        </div>
        <div className="unit">
          <div className="unit-section">
            <img className="silver" src={Silver} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Silver</h1>
            <p className="product-description">
              Introducing our Silver unit, a more compacted verison of our
              Platinum unit.
            </p>
          </div>
          <div className="bar"></div>
        </div>
        <div className="unit">
          <div className="unit-section">
            <img className="clairify-1" src={C1} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Clairify 1</h1>
            <p className="product-description">
              Introducing our Clairify 1 unit, is perfect for any home, boat and
              recreational vehicle.
            </p>
          </div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
