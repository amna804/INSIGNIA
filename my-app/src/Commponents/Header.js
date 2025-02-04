import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="left-logo">
            <img src="/images/logo.png" alt="Insignia Logo" className="logo" />
          </div>

          <div className="right-options">
            <a href="/store-locator"style={{ fontSize: '22px' }}>
              <IoLocationOutline />
              Store Locator
            </a>

            <a href="/signin"style={{ fontSize: '22px' }}>Sign In</a>
          </div>
        </div>
        <div className="bottom-nav">
          <div className="navigation">
            <nav>
              <ul className="nav-links">
                <li>
                  <a href="/collections">Collections</a>
                </li>
                <li>
                  <a href="/athena">Athena</a>
                </li>
                <li>
                  <a href="/timeless">Timeless</a>
                </li>
                <li>
                  <a href="/newin">New In</a>
                </li>
                <li>
                  <a href="/women">Women</a>
                </li>
                <li>
                  <a href="/men">Men</a>
                </li>
                <li>
                  <a href="/bags">Bags</a>
                </li>
                <li>
                  <a href="/kids">Kids</a>
                </li>
                <li>
                  <a href="/fragrances">Fragrances</a>
                </li>
                <li>
                  <a href="/accessories">Accessories</a>
                </li>
                <li>
                  <a href="/sale">Sale</a>
                </li>
                <li>
                  <a href="/blogs">Blogs</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navSearch">
            <div className="search-bar">
              <input type="text" placeholder="Search for..." />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="icons">
              <a href="/wishlist">
                <IoMdHeartEmpty />
              </a>
              <a href="/cart">
                <HiOutlineShoppingBag />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Image Section */}
      <section className="hero-image">
        <img src="/images/main carousal.webp" alt="Main Carousel" />
      </section>
    </>
  );
};

export default Header;
