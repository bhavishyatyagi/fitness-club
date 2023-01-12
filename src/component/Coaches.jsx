import React from "react";

import coache1 from "../images/coache-1.jpg";

const Coaches = () => {
  return (
    <div className="coaches">
      <h1>COACHES</h1>
      <div className="coaches-container">
        <div className="coach">
          <img src={coache1} alt="coache 1" />
          <div className="coache-details">
            <h2>Bhavishya Tyagi</h2>
          </div>
        </div>
        <div className="coach">
          <img src={coache1} alt="coache 1" />
          <div className="coache-details">
            <h2>Mukesh Gahlaut</h2>
          </div>
        </div>
        <div className="coach">
          <img src={coache1} alt="coache 1" />
          <div className="coache-details">
            <h2>Aditya Kumar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
