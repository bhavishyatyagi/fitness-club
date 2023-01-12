import React from "react";
import { Link } from "react-scroll";
function Header() {
  return (
    <div id="main">
      <div className="pr-heading">
        <h2>STEP UP YOUR</h2>
        <h1>
          <span>FITNESS</span> WITH US
        </h1>
        <p className="details">
          Builds Your Body And Fitness With Professional Touch
        </p>
        <div className="header-btns">
          <Link to="price" smooth={true} duration={1000}>
            <a href="#" className="header-btn">
              JOIN US
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
