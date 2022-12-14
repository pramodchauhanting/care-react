// import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import logo from "../public/logo.png";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  let scroll = Scroll.animateScroll;

  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.mobile_wrap}`}>
            <div className={`${styles.logo}`}>
              <a className={`${styles.brand}`}>
                {/* <img src="logo.png" alt="logo" /> */}
                <img src={logo.src} alt="" />
                {/* <Image src="/logo.png" alt="logo" width={93} height={55} /> */}
              </a>
            </div>

            <button
              onClick={() => setSidebarActive(!sidebarActive)}
              className={`${styles.burger} ${
                sidebarActive ? styles.close_icon : ""
              }`}
              type="button"
              id="burger"
            >
              <span className={`${styles.burger_line}`}></span>
              <span className={`${styles.burger_line}`}></span>
              <span className={`${styles.burger_line}`}></span>
              <span className={`${styles.burger_line}`}></span>
            </button>
          </div>

          <span className={`${styles.overlay}`} id="overlay"></span>
          <div
            className={`${styles.menu} ${sidebarActive ? styles.active : ""}`}
            id="menu"
          >
            {/* <div className={`${styles.close_menu_icon}`}>x</div> */}

            <ul className={`${styles.menu_block}`}>
              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#about_us">
                  About Us
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="about_us"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`${styles.menu_link} `}
                >
                  About Us
                </Link>
              </li>
              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#our_secret">
                  What???s Our Secret
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="our_secret"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`${styles.menu_link}`}
                >
                  What???s Our Secret
                </Link>
              </li>
              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#video">
                  Video
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="video"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${styles.menu_link}`}
                >
                  Video
                </Link>
              </li>
              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#product_collection">
                  Products
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="product_collection"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`${styles.menu_link}`}
                >
                  Products
                </Link>
              </li>
              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#testimonial">
                  Reviews
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`${styles.menu_link}`}
                >
                  Reviews
                </Link>
              </li>

              <li className={`${styles.menu_item}`}>
                {/* <a className={`${styles.menu_link}`} href="#contact_us">
                  Contact Us
                </a> */}
                <Link
                  onClick={() => setSidebarActive(!sidebarActive)}
                  activeClass="active"
                  to="contact_us"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`${styles.menu_link}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
