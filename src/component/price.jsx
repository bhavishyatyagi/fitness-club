import React from "react";
import price1 from "../images/price1.jpg";
import price2 from "../images/price2.jpg";
import price3 from "../images/price3.jpg";

function Price() {
  return (
    <section className="price-package" id="price">
      <div className="container">
        <h2>Choose Your Package</h2>
        <p className="title-p">
          These are some of our best packages for a month. We ensure you a fit
          and healthy body in 3 months.
        </p>
        <div className="content">
          <div className="box wow bounceInUp">
            <div className="inner">
              <div className="price-tag">₹899/Month</div>
              <div className="img">
                <img src={price1} alt="price" />
              </div>
              <div className="text">
                <h3>For Beginners</h3>
                {/* <p>Get Free WiFi</p> */}
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym</p>
                <p>Service Locker Rooms</p>
                <a href className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="box wow bounceInUp" data-wow-delay="0.2s">
            <div className="inner">
              <div className="price-tag">₹999/Month</div>
              <div className="img">
                <img src={price2} alt="price" />
              </div>
              <div className="text">
                <h3>For Intermediate</h3>
                {/* <p>Get Free WiFi</p> */}
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="box wow bounceInUp" data-wow-delay="0.4s">
            <div className="inner">
              <div className="price-tag">₹1299/Month</div>
              <div className="img">
                <img src={price3} alt="price" />
              </div>
              <div className="text">
                <h3>For Advanced</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
