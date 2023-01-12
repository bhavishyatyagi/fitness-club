import React from "react";
import aboutimage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>ABOUT US</h1>
        <p>
          Fitness Club is India's Biggest Incentivised Wellness Platform. We
          have listed around 12000+ fitness centre across 14 cities PAN India.
          You can look for gym and fitness centres near to your location, can
          book a trial or can buy the best gym and fitness centres deals online.
          You can also check out the information like membership fees, a number
          of personal trainers, schedules and timing, latest workout equipment,
          amenities, images, videos and virtual tour.
        </p>
        {/* <button> READ MORE</button> */}
      </div>
    </div>
  );
}

export default About;
