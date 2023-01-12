import React from "react";
import { Link } from "react-scroll";
function Offer() {
  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          {" "}
          A Big <span>OFFER</span>FOR THIS SUMMER
        </h1>
        <p className="details">This is a limited time offer.</p>
        <div className="pr-btns">
          <a href="#" className="pr-btn">
            <Link to="price" smooth={true} duration={1000}>
              JOIN NOW
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offer;
