import Link from "next/link";
import styles from "../styles/components/Header.module.scss";
import logo from "../public/logo.png";
// import Image from "next/image";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.logo}`}>
            <a className={`${styles.brand}`}>
              {/* <img src="logo.png" alt="logo" /> */}
              <img src={logo.src} alt="" />
              {/* <Image src="/logo.png" alt="logo" width={93} height={55} /> */}
            </a>
          </div>

          <button className={`${styles.burger}`} type="button" id="burger">
            <span className={`${styles.burger_line}`}></span>
            <span className={`${styles.burger_line}`}></span>
            <span className={`${styles.burger_line}`}></span>
          </button>
          <span className={`${styles.overlay}`} id="overlay"></span>
          <div className={`${styles.menu}`} id="menu">
            <div className={`${styles.close_menu_icon}`}>x</div>
            <ul className={`${styles.menu_block}`}>
              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#about_us">
                  About Us
                </a>
              </li>
              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#our_secret">
                  What’s Our Secret
                </a>
              </li>
              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#video">
                  Video
                </a>
              </li>
              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#product_collection">
                  Products
                </a>
              </li>
              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#testimonial">
                  Reviews
                </a>
              </li>

              <li className={`${styles.menu_item}`}>
                <a className={`${styles.menu_link}`} href="#contact_us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
