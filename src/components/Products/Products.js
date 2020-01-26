import React from "react";
import "./products.css";
import Platinum from "./images/plat.png";
import C1 from "./images/c1.png";
import Ro from "./images/ro.png";
import Silver from "./images/silver.png";

function Products() {
  return (
    <div className="products">
      <p className="product-intro">Introducing our line up of products</p>
      <p className="product-intro">
        {" "}
        All of our units come with the Claire gurantte, this gurannte states
        that each of our units uses no chemicals, no power and comes with a
        99.9% disinfection rate
      </p>
      <div className="water-units">
        <div className="unit">
          <div className="unit-section">
            <img className="platinum" src={Platinum} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Platinum</h1>
            <p className="product-description">
              Introducing our Platinum unit, perfect for homes that use well
              water, comes with the Claire guarantee.
            </p>
            <p>Price: 400$</p>
          </div>
        </div>
        <div className="unit">
          <div className="unit-section">
            <img className="silver" src={Silver} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Silver</h1>
            <p className="product-description">
              Introducing our Silver unit, a more compacted verison of our
              Platinum unit, comes with the Claire guarantee.{" "}
            </p>
            <p>Price: 300$</p>
          </div>
        </div>
        <div className="unit">
          <div className="unit-section">
            <img className="clairify-1" src={C1} alt="platinum" />
          </div>
          <div className="product-text">
            <h1>Clairify 1</h1>
            <p className="product-description">
              Introducing our Clairify 1 unit, is perfect for any home, boat and
              recreational vehicle. Comes with Claire guarantee.
            </p>
            <p>Price: 200$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
