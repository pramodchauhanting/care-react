import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

//import images
import logo from "../public/logo.png";
import ban_logo from "../public/ban_logo.png";
import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import ting from "../public/ting.svg";

const Footer = () => {
  return (
    <section>
      <footer className={`${styles.footer_main} ptb_40`}>
        <div className="container">
          <div className={`${styles.footer_flex} d_f`}>
            <div className={`${styles.footer_item} toTop`} data-scroll>
              <div className={`${styles.both_logo} d_f`}>
                <div className={`${styles.footer_logo} signature_logo toTop`}>
                  <img src={logo.src} alt="" />
                </div>
                <div
                  className={`${styles.footer_logo} ban_logo toTop`}
                  data-scroll="in"
                >
                  <p class="para">A Venture of</p>
                  <img src={ban_logo.src} alt="" />
                </div>
                <p className={`${styles.para} top_space`}>
                  A trusted name in the wellness circles for over 55 years
                </p>
              </div>
            </div>

            <div
              className={`${styles.footer_item} social_flex_main toTop`}
              data-scroll
            >
              {/* <ul>
                            <li><a class="para scrollTo" href="#testimonial">Terms of Use</a></li>
                            <li><a class="para scrollTo" href="#contact_us">Privacy Policy</a></li>
                        </ul>  */}
              <div className={`${styles.social_flex}`}>
                <p className={`${styles.para}`}>Follow Us</p>
                <div className={`${styles.strip_item} social_link`}>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/caregreentea/"
                  >
                    <img src={facebook.src} alt="" />
                  </a>
                  <a target="_blank" href="https://www.instagram.com/v.care4u/">
                    <img src={instagram.src} alt="" />
                  </a>
                  {/* <a target="_blank" href=""><img src="img/home/twitter.svg" alt="twitter"></a>
                                <a target="_blank" href=""><img src="img/home/youtube.svg" alt="youtube"></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={`${styles.footer_strip_main}`}>
        <div className="container">
          <div className={`${styles.footer_strip} d_f`}>
            <div className={`${styles.strip_item}`}>
              <p className={`${styles.para}`}>
                Copyright 2022 © Care Pvt. Ltd.
              </p>
            </div>
            <div className={`${styles.strip_item}`}>
              <a target="_blank" href="https://www.ting.in/">
                <img src={ting.src} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
