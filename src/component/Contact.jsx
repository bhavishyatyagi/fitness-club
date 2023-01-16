import React from "react";
import logo from "../images/logo.png";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import muscleStone from "../images/muscle-stone.jpeg";
import Map from "../images/map.png";

function Contact() {
  return (
    <div id="contact-section">
      <h1>CONTACT US</h1>

      <div id="contact-form">
        <div id="contact-details">
          <div className="contact-header-img">
            <a href="#" class="logo-fitness">
              <b>
                FITNESS <span>CLUB</span>
              </b>
            </a>
          </div>
          <div className="detail">
            <ul className="detail-li">
              <li>27th KM Milestone, Delhi - Meerut Expy</li>
              <li>Ghaziabad, Uttar Pradesh</li>
              <li>9897527746</li>
              <li>
                <ul className="social-list">
                  <a href="https://www.instagram.com/tyagi_bhavishya_108/">
                    <li>
                      <BsInstagram />
                    </li>
                  </a>
                  <a href="https://github.com/bhavishyatyagi">
                    <li>
                      <BsGithub />
                    </li>
                  </a>
                  <a href="https://wa.me/+919897527746">
                    <li>
                      <BsWhatsapp />
                    </li>
                  </a>
                  <a href="https://twitter.com/Bhavish98623990">
                    <li>
                      <BsTwitter />
                    </li>
                  </a>
                </ul>
              </li>
            </ul>

            <a href="https://goo.gl/maps/fXTMrhryvRLYSU1UA" target="_blank">
              <img className="map" src={Map} alt="" />
            </a>
          </div>
        </div>

        <div id="contact">
          <form action="https://formspree.io/f/mnqyqene" method="POST">
            <input type="text" placeholder="First Name" name="Name" required />
            <input type="email" placeholder="Email" name="E-mail" required />
            <input type="number" placeholder="Phone Number" name="Phone Number" required />
            <textarea placeholder="Write Here......" name="Message" required />
            <input type="submit" value="send" />
          </form>
        </div>
      </div>

      <hr></hr>

      <div className="copyright">
        <h3>Copyright &copy; Bhavishya Tyagi</h3>
        <a href="https://github.com/bhavishyatyagi">
          <BsGithub />
        </a>
        <a href="https://wa.me/+919897527746">
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
}
export default Contact;
