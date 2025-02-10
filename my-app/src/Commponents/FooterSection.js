import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaPinterest, FaPhone, FaEnvelope } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer-container">
      {/* Newsletter Section */}
      <div className="newsletter">
        <div className="newsletter-content">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Order tracking</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>Customer service</li>
            <li>Privacy policy</li>
            <li>Return & exchange policy</li>
            <li>Customer claim policy</li>
            <li>Shipping & handling policy</li>
            <li>Store locator</li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        <div className="footer-contact">
          <p><FaPhone /> 042 111 456 788</p>
          <p><FaEnvelope /> support@insignia.com.pk</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
            <FaPinterest />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025, Insignia PK Created by @mn@</p>
      </div>
    </footer>
  );
};

export default FooterSection;
